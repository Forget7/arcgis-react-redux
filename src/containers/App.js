import {Layout, Menu} from "antd";

const {Header, Content, Sider} = Layout;
import React from "react";
import WebMapView from "./WebMapView";

import MapImageLayer from "esri/layers/MapImageLayer";
import WebMap from "esri/WebMap";
import {mapUrl}from "../contants/mapConfig"
import TocControl from "./TocControl";

const mapImageLayer = new MapImageLayer({
    url: mapUrl
});

const webmap = new WebMap({
    basemap: "satellite",
    layers: [mapImageLayer]
});


const App = () => (
    <Layout className="layout">
        <Header>
            <div className="logo"/>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Sider id="LayerControl" width={240} style={{background: '#fff'}}>
                <TocControl mapImageLayer={mapImageLayer}/>
            </Sider>
            <Content style={{background: '#fff', padding: 0, margin: 0}}>
                <div className="main">
                    <WebMapView webmap={webmap}
                                mapImageLayer={mapImageLayer}/>
                </div>
            </Content>
        </Layout>
    </Layout>
);

export default App;
