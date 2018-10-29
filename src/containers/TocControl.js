import React from 'react'
import TocList from "../components/TocList";
import {connect} from 'react-redux'

export class TocControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tocOptions: []
        }
    }

    componentDidMount() {
        this.props.mapImageLayer.when(() => {
                let lyrCollections = this.props.mapImageLayer.allSublayers;
                let tocOptions = [];
                lyrCollections.map((sublayer => {
                    tocOptions.push({
                        id: sublayer.id,
                        title: sublayer.title
                    })
                }));
                this.setState({
                    tocOptions: tocOptions
                })
            }
        )
    }

    render() {
        const {onChange, count} = this.props;
        return (
            <TocList tocOptions={this.state.tocOptions} onChange={onChange}>
                {console.log(count)}
            </TocList>

        )
    }
}

const mapDispatchToProps=(dispatch)=> {
    return {
        onChange: () => dispatch({type: 'ADD'})
    }
};

const mapStateToProps = (state) => {
    return {
        count: state
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TocControl)
