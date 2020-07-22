import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu'
import { Layout, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <Header>
                <nav className="navbar">
                    <div className="navbar-logo">
                        <a href="">Ant Design</a>
                    </div>

                    <div className="navbar-menu">
                        <NavbarMenu mode="horizontal" />
                    </div>

                    <Button className="navbar-toggler" onClick={this.showDrawer} type="link" icon={<MenuOutlined />} />

                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <NavbarMenu mode="inline" />
                    </Drawer>
                </nav>
            </Header>
        );
    }
}

export default Navbar;