import React from "react"
import SearchInput from "../components/SearchInput";
import SearchSelect from "../components/SearchSelect";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = (state) => {
    let options = [];
    state.layerReducer.forEach(layer => {
        if (layer.visible===true) {
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
        options: options
    }
};

export class SearchControl extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const {options} = this.props;
        return (
            <div>
                <SearchSelect options={options}/>
                <SearchInput/>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(SearchControl)
