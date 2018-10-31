import React from "react";
import {Cascader} from 'antd';

export class SearchSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {options,onChange}=this.props;
        return (
            <Cascader style={{width: 200}}
                      onChange={onChange}
                      options={options}
                      placeholder="请选择图层和字段" allowClear={false}/>
        )
    }
}

export default SearchSelect;
