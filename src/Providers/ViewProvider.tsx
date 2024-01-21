import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';
import {CustomHooksList} from "../types/customHooksType";

export const DEFAULT_VIEW = CustomHooksList.useIsMountedComponent;

export type ViewContextType = {
    view: CustomHooksList;
    setView: (nextView: CustomHooksList) => void;
};

const defaultViewContext = {
    view: DEFAULT_VIEW,
    setView: () => {
        //
    }
};

export const ViewContext = createContext<ViewContextType>(defaultViewContext);

type ProvidersType = {
    readonly children: ReactNode;
};

export const ViewProvider: FC<ProvidersType> = (props) => {
    const { children } = props;

    const [view, setView] = useState<CustomHooksList>(defaultViewContext.view);

    const viewContextValue = useMemo(
        () => ({
            view,
            setView
        }),
        [view]
    );

    return <ViewContext.Provider value={viewContextValue}>{children}</ViewContext.Provider>;
};