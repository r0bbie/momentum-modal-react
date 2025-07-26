import { ReactNode } from 'react';
import { VisitOptions } from '@inertiajs/core';
export declare function useModal(resolverCallback?: CallableFunction | null): {
    show: boolean;
    vnode: ReactNode;
    close: () => void;
    redirect: (options?: VisitOptions) => void;
    props: Record<string, any>;
};
