import MapView from "esri/views/MapView";
import React from "react";
import MapDiv from "../components/MapDiv";

const view = new MapView();

export class WebMapView extends React.Component {

    componentDidMount() {
        view.map = this.props.webmap;
        view.container = document.getElementById('MapDiv');
        view.ui.move("zoom", "bottom-right");
        this.onComponentLoad(view);
        view.on("click", function () {
            document.getElementById("searchReItem").style.visibility = "hidden";
        });
    }

    onComponentLoad = (view) => {
        this.props.mapImageLayer.when(() => {
            view.goTo({target: this.props.mapImageLayer.fullExtent});//地图异步通讯成功，地图镜头移动到数据范围（full extent）
        });
    };

    render() {
        return (
            <MapDiv/>
        );
    }
}

export default WebMapView
