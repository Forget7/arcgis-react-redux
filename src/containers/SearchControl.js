import React from "react"
import SearchInput from "../components/SearchInput";
import SearchSelect from "../components/SearchSelect";
import connect from "react-redux/es/connect/connect";
import query from "../utils/queryfuntion";
import ResultList from '../components/ResultList.js'
import ReactDOM from "react-dom";

const Render = ResultList;

const mapStateToProps = (state) => {
    let options = [];
    state.layerReducer.forEach(layer => {
        if (layer.visible === true) {
            let option = {
                value: layer.title,
                label: layer.title,
                children: []
            };
            let childrenList = [];
            layer.fields.forEach(field => {
                let childrenOption = {
                    value: field,
                    label: field,
                };
                childrenList.push(childrenOption);
            });
            option.children = childrenList;
            options.push(option);
        }
    });
    return {
        options: options,
        layers: state.layerReducer
    }
};

export class SearchControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLayer: null,
            selectedField: null,
        };

        this.props.emitter.addListener('GotResultData', this.setData);
    }

    onChange = (value) => {
        this.setState({
            selectedLayer: value[0],
            selectedField: value[1]
        });
    };

    onSearch = (value, emitter) => {
        const {layers} = this.props;
        const {selectedField, selectedLayer} = this.state;
        let url = null;
        if (selectedField.trim() !== null && selectedLayer.trim() !== null && value.trim() !== '') {

            layers.forEach(layer => {
                if (layer.title.trim() === selectedLayer.trim()) {
                    url = layer.sublayer.url;
                }
            });
            const paras = {url, selectedField, value, emitter};
            query(paras);
        }
    };

    setData = (data = []) => {
        this.setState({
            data: data,
        });
        ReactDOM.unmountComponentAtNode(document.querySelector("#searchReItem"));
        ReactDOM.render(<Render data={this.state.data}
                                selectedField={this.state.selectedField}/>
            , document.querySelector("#searchReItem"));
        document.querySelector("#searchReItem").style.visibility = "visible";
    };

    render() {
        const {options} = this.props;
        return (
            <div>
                <div className="search_controls">
                    <SearchSelect options={options} onChange={this.onChange}/>
                    <SearchInput onSearch={value => this.onSearch(value, this.props.emitter)}/>
                </div>
                <div className="results-container" id="searchReItem"/>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(SearchControl)
