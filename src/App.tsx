import React, { useState } from 'react';
import './index.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { CustomHooksList } from './types/customHooksType';
import IsMountedComponent from './components/IsMountedComponent'; // Импорт компонента

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(CustomHooksList.useContainerSize);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Рендер компонента в зависимости от выбранного пункта меню
    const renderSelectedComponent = () => {
        switch (selectedMenu) {
            case CustomHooksList.useContainerSize:
                return <div>Placeholder for useContainerSize component</div>;
            case CustomHooksList.IsMountedComponent:
                return <IsMountedComponent />;
            case CustomHooksList.useCopyToClipboard:
                return <div>Placeholder for useCopyToClipboard component</div>;
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
                            icon: <UserOutlined />,
                            label: CustomHooksList.useContainerSize,
                        },
                        {
                            key: CustomHooksList.IsMountedComponent,
                            icon: <VideoCameraOutlined />,
                            label: CustomHooksList.IsMountedComponent,
                        },
                        {
                            key: CustomHooksList.useCopyToClipboard,
                            icon: <UploadOutlined />,
                            label: CustomHooksList.useCopyToClipboard,
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
