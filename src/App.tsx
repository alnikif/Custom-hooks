import React, { useState } from 'react';
import './index.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { CustomHooksList } from './types/customHooksType';
import IsMountedComponent from './components/IsMountedComponent';
import {UseIsFirstRender} from "./components/UseIsFirstRender";
import { Title } from "./components/title/Title"
const textUseIsFirstRender = "import React, {useEffect, useRef} from 'react';\n" +
    "\n" +
    "export const useIsFirstRender = () => {\n" +
    "    const isFirstRender = useRef(true);\n" +
    "\n" +
    "    if(isFirstRender.current){\n" +
    "        isFirstRender.current = false;\n" +
    "        return true\n" +
    "    }\n" +
    "\n" +
    "    return isFirstRender.current;\n" +
    "};";


//////////
const textIsMountedComponent = "import {useEffect, useRef} from 'react';\n" +
    "\n" +
    "export const useIsMounted = () => {\n" +
    "    const isMounted = useRef(false);\n" +
    "\n" +
    "    useEffect(() => {\n" +
    "        isMounted.current = true;\n" +
    "    })\n" +
    "\n" +
    "    return isMounted.current;\n" +
    "};"


const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(CustomHooksList.useContainerSize);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const renderSelectedComponent = () => {
        switch (selectedMenu) {
            case CustomHooksList.useContainerSize:
                return <div>Placeholder for useContainerSize component</div>;
            case CustomHooksList.IsMountedComponent:
                return (
                    <IsMountedComponent
                        text={textIsMountedComponent}
                        language={'javascript'}
                        showLineNumbers={true}
                        startingLineNumber={1}
                    />
                    )
            case CustomHooksList.useIsFirstRender:
                return (
                    <UseIsFirstRender
                        text={textUseIsFirstRender}
                        language={'javascript'}
                        showLineNumbers={true}
                        startingLineNumber={1}
                    />
                )
            default:
                return null;
        }
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[selectedMenu]}
                    onClick={(e) => setSelectedMenu(e.key as CustomHooksList)}
                    items={[
                        {
                            key: CustomHooksList.useContainerSize,
                            icon: <CheckOutlined />,
                            label: CustomHooksList.useContainerSize,
                        },
                        {
                            key: CustomHooksList.IsMountedComponent,
                            icon: <CheckOutlined />,
                            label: CustomHooksList.IsMountedComponent,
                        },
                        {
                            key: CustomHooksList.useCopyToClipboard,
                            icon: <CheckOutlined />,
                            label: CustomHooksList.useCopyToClipboard,
                        },
                        {
                            key: CustomHooksList.UseHover,
                            icon: <CheckOutlined />,
                            label: CustomHooksList.UseHover,
                        },
                        {
                            key: CustomHooksList.useIsFirstRender,
                            icon: <CheckOutlined />,
                            label: CustomHooksList.useIsFirstRender,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>

                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Title/>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderSelectedComponent()}
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
