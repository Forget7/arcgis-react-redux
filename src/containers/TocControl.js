import React from 'react'
import TocList from "../components/TocList";
import {initTocList} from "../actions/index.js"
import {connect} from 'react-redux'

export class TocControl extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.mapImageLayer.when(() => {
                const {initTocList} = this.props;
                let lyrCollections = this.props.mapImageLayer.allSublayers;
                lyrCollections.map((sublayer => {
                    initTocList(sublayer);
                }));
            }
        )
    }

    render() {
        const {tocList} = this.props;
        return (
            <TocList tocOptions={tocList} onChange={e => console.log(e)}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initTocList: (sublayer) => {
            dispatch(initTocList(sublayer))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        tocList: state.tocReducer
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TocControl)
