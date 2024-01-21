import React, { FC, ReactNode } from 'react';
import { ViewProvider } from './Providers/ViewProvider';

type ProvidersType = {
    readonly children: ReactNode;
};

const Providers: FC<ProvidersType> = (props) => {
    const { children } = props;

    return (
        <ViewProvider>
            {children}
        </ViewProvider>
    );
};

export default Providers;