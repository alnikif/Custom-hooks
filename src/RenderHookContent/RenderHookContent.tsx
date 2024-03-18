import React, {useContext} from 'react';
import {CustomHooksList} from '../types/customHooksType';
import {
    textIsMountedComponent,
    textUseContainerSize,
    textUseCopyToClipboard, textUseDebounce,
    textUseHover,
    textUseIsFirstRender,
    textUseLoading,
    textUseLocalStorage,
    textUseToggle
} from "../constants/hooksContent";
import CodeBlockPrettier from "../CodeBlockPrettier/CodeBlockPrettier";
import {ViewContext} from "../Providers/ViewProvider";

const RenderHookContent: React.FC = () => {
    const { view } = useContext(ViewContext);

    switch (view) {
        case CustomHooksList.useContainerSize:
            return <CodeBlockPrettier text={textUseContainerSize} />;
        case CustomHooksList.useIsMountedComponent:
            return <CodeBlockPrettier text={textIsMountedComponent} />;
        case CustomHooksList.useIsFirstRender:
            return <CodeBlockPrettier text={textUseIsFirstRender} />;
        case CustomHooksList.useHover:
            return <CodeBlockPrettier text={textUseHover} />;
        case CustomHooksList.useCopyToClipboard:
            return <CodeBlockPrettier text={textUseCopyToClipboard} />;
        case CustomHooksList.useToggle:
            return <CodeBlockPrettier text={textUseToggle} />;
        case CustomHooksList.useLoading:
            return <CodeBlockPrettier text={textUseLoading} />;
        case CustomHooksList.useLocalStorage:
            return <CodeBlockPrettier text={textUseLocalStorage} />;
        case CustomHooksList.useDebounce:
            return <CodeBlockPrettier text={textUseDebounce} />
        default:
            return null;
    }
};

export default RenderHookContent;