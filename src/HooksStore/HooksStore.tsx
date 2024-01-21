import React, {useState, useContext} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined,} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {CustomHooksList} from '../types/customHooksType';
import {Title} from "../components/title/Title";
import {tabsConfigMap} from "../tabsConfigMap/tabsConfigMap";
import {ViewContext} from "../Providers/ViewProvider";
import RenderHookContent from "../RenderHookContent/RenderHookContent";

const { Header, Sider, Content } = Layout;

const menuItems = Object.keys(tabsConfigMap)
    .map((key) => {
        const isKeyValid = key in tabsConfigMap;
        if (!isKeyValid) return null;
        return {...tabsConfigMap[key as CustomHooksList], key}
    }).filter((item) => item);

const HooksStore: React.FC = () => {
    const { view, setView } = useContext(ViewContext);

    const [collapsed, setCollapsed] = useState(false);
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[view]}
                    onClick={(e) => setView(e.key as CustomHooksList)}
                    items={menuItems}
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
                    <RenderHookContent />
                </Content>
            </Layout>
        </Layout>
    );
};

export default HooksStore;