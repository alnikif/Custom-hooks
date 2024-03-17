import React, {ReactNode} from "react";
import {CustomHooksList} from "../types/customHooksType";
import {RocketOutlined} from "@ant-design/icons";

export type TabsConfigItemType = {
    icon: ReactNode,
    label: CustomHooksList
};

export type TabsConfigMapType = Record<CustomHooksList, TabsConfigItemType>;

export const tabsConfigMap: Partial<TabsConfigMapType> = {
    [CustomHooksList.useContainerSize]: {
        icon: <RocketOutlined />,
        label: CustomHooksList.useContainerSize,
    },
    [CustomHooksList.useIsMountedComponent]: {
        icon: <RocketOutlined />,
        label: CustomHooksList.useIsMountedComponent,
    },
    [CustomHooksList.useCopyToClipboard]: {
        icon: <RocketOutlined />,
        label: CustomHooksList.useCopyToClipboard,
    },
    [CustomHooksList.useHover]: {
        icon: <RocketOutlined />,
        label: CustomHooksList.useHover,
    },
    [CustomHooksList.useIsFirstRender]: {
        icon: <RocketOutlined />,
        label: CustomHooksList.useIsFirstRender,
    },
    [CustomHooksList.useToggle]:{
        icon: <RocketOutlined />,
        label: CustomHooksList.useToggle
    },
    [CustomHooksList.useLoading]:{
        icon: <RocketOutlined />,
        label: CustomHooksList.useLoading
    },
    [CustomHooksList.useLocalStorage]:{
        icon: <RocketOutlined />,
        label: CustomHooksList.useLocalStorage
    }
};