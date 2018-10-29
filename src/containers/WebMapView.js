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
    }

    onComponentLoad = (view) => {
        this.props.mapImageLayer.when(() => {
            view.goTo({target: this.props.mapImageLayer.fullExtent});//组件加载好之后有一个镜头移动的效果
        });
    };

    render() {
        return (
            <MapDiv/>
        );
    }
}

export default WebMapView