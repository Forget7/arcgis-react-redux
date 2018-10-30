import React from 'react'
import TocList from "../components/TocList";
import {initTocList, setLayerVisible, CleanList} from "../actions/index.js"
import {connect} from 'react-redux'

// "initTocList" 作为本component的“方法”，以props的形式传入。
// 方法的实现依赖于该函数和reducer函数（只能是纯函数）的处置。
const mapDispatchToProps = (dispatch) => {
    return {
        cleanList: () => {
            dispatch(CleanList)
        },
        initTocList: (sublayer) => {
            dispatch(initTocList(sublayer))
        },
        tocListOnChange: (key) => {
            dispatch(setLayerVisible(key))
        }
    }
};

// "layerList"作为本component的“状态”，以props的形式传入。
// 状态的出口。状态一但改变，就在组件中表现出来。
const mapStateToProps = (state) => {
    return {
        tocList: state.layerReducer
    }
};


export class TocControl extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.mapImageLayer.when(() => {
                const {cleanList, initTocList} = this.props;
                cleanList();
                let lyrCollections = this.props.mapImageLayer.allSublayers;
                lyrCollections.map((sublayer => {
                    let featureLayer = sublayer.createFeatureLayer();
                    let fields=[];
                    featureLayer.load().then(layer => {
                        layer.fields.forEach(field => {
                            fields.push(field.name)
                        });
                        const option={
                            sublayer: sublayer,
                            fields :fields
                        };
                        initTocList(option);
                    });
                }));
            }
        )
    }

    render() {
        const {tocList, tocListOnChange} = this.props;
        return (
            <TocList tocOptions={tocList} onChange={e => tocListOnChange(e.target.id)}/>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TocControl)
