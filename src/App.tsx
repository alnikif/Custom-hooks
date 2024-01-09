import React, {useState} from 'react';
import './index.css';
import {MenuFoldOutlined, MenuUnfoldOutlined, RocketOutlined,} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {CustomHooksList} from './types/customHooksType';
import IsMountedComponent from './components/IsMountedComponent';
import {UseIsFirstRender} from "./components/UseIsFirstRender";
import {Title} from "./components/title/Title"
import {textIsMountedComponent, textUseContainerSize, textUseHover, textUseIsFirstRender} from "./constants";
import UseContainerSize from "./components/UseContainerSize";
import UseHover from "./components/UseHover";

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
                return (
                    <UseContainerSize
                        text={textUseContainerSize}
                        language={'javascript'}
                        showLineNumbers={true}
                        startingLineNumber={1}/>
                );
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
            case CustomHooksList.UseHover:
                return(
                    <UseHover
                        text={textUseHover}
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
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[selectedMenu]}
                    onClick={(e) => setSelectedMenu(e.key as CustomHooksList)}
                    items={[
                        {
                            key: CustomHooksList.useContainerSize,
                            icon: <RocketOutlined />,
                            label: CustomHooksList.useContainerSize,
                        },
                        {
                            key: CustomHooksList.IsMountedComponent,
                            icon: <RocketOutlined />,
                            label: CustomHooksList.IsMountedComponent,
                        },
                        {
                            key: CustomHooksList.useCopyToClipboard,
                            icon: <RocketOutlined />,
                            label: CustomHooksList.useCopyToClipboard,
                        },
                        {
                            key: CustomHooksList.UseHover,
                            icon: <RocketOutlined />,
                            label: CustomHooksList.UseHover,
                        },
                        {
                            key: CustomHooksList.useIsFirstRender,
                            icon: <RocketOutlined />,
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
