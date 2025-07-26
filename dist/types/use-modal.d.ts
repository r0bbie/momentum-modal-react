import { ReactNode } from 'react';
export declare function useModal(resolverCallback?: CallableFunction | null): {
    show: boolean;
    vnode: ReactNode;
    close: () => void;
    redirect: () => void;
    props: Record<string, any>;
};
