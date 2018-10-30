import React from "react";
import {Cascader} from 'antd';

export class SearchSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Cascader style={{width: 200}}
                      options={this.props.options}
                      placeholder="请选择图层和字段" allowClear={false}/>
        )
    }
}

export default SearchSelect;
