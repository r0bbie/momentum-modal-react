import {http, router, usePage} from '@inertiajs/react';
import {useEffect, useState, ReactNode} from 'react';
import { VisitOptions } from "@inertiajs/core";

// Modal headers for the current page, added to every Inertia request.
// Inertia 3 sends requests with its own HTTP client, so these can't go on axios defaults.
let modalHeaders: {key?: string | null; redirectURL?: string | null} = {};
let requestHandlerRegistered = false;

const registerRequestHandler = () => {
  if (requestHandlerRegistered) {
    return;
  }

  requestHandlerRegistered = true;

  http.onRequest((config) => {
    const headers = {...config.headers};

    // The modal key is only sent on writes, so a redirect back to the modal keeps the same key
    if (config.method !== 'get' && modalHeaders.key) {
      headers['X-Inertia-Modal-Key'] = modalHeaders.key;
    }

    if (modalHeaders.redirectURL) {
      headers['X-Inertia-Modal-Redirect'] = modalHeaders.redirectURL;
    }

    return {...config, headers};
  });
};

export function useModal(resolverCallback: CallableFunction | null = null) {
  const modal = usePage().props?.modal;
  const props = modal?.props;
  const key = modal?.key;

  const [show, setShow] = useState<boolean>(false);
  const [vnode, setVnode] = useState<ReactNode>(<></>);
  const [nonce, setNonce] = useState<string | null>();

  const resolver = resolverCallback !== null ? resolverCallback : globalThis.resolveMomentumModal;

  registerRequestHandler();

  const resetHeaders = () => {
    modalHeaders = {};
  };

  const updateHeaders = () => {
    modalHeaders = {
      key,
      redirectURL: modal?.redirectURL,
    };
  };

  const close = () => {
    setShow(false);
    resetHeaders();
  };

  const resolveComponent = async () => {
    if (typeof resolver !== 'function') {
      throw Error("Resolver function not defined. You have to define it at Inertia's entrypoint.");
    }
    if (nonce == modal?.nonce || !modal?.component) {
      return close();
    }

    let component = modal?.component ? resolver(modal.component) : null;

    // if the resolver returned a promise we must call it
    if (typeof component === 'function') {
      component = await component();
    }

    setNonce(modal?.nonce);
    if (component) {
      const ComponentToRender = component.default;
      setVnode(<ComponentToRender key={key} {...props} />);
    } else {
      setVnode('');
    }

    setShow(true);
  };

  useEffect(() => {
    void resolveComponent().then(() => {
      const handlePopState = () => setNonce(null);

      if (typeof window !== 'undefined') {
        window.addEventListener('popstate', handlePopState);
      }

      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    });
  }, []);

  useEffect(() => {
    if (modal?.nonce !== nonce) {
      void resolveComponent();
    }
  }, [modal]);

  useEffect(updateHeaders, [key]);

  const redirect = (options: VisitOptions = {}) => {
    var redirectURL = modal?.redirectURL ?? modal?.baseURL;

    setVnode(false);

    if (!redirectURL) {
      return;
    }

    return router.visit(redirectURL, {
      preserveScroll: true,
      preserveState: true,
      ...options
    });
  };

  return {
    show,
    vnode,
    close,
    redirect,
    props,
  };
}
