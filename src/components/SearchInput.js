import React from "react";
import {Input} from 'antd';

const Search = Input.Search;

export class SearchInput extends React.Component {
    render() {
        return (
            <Search placeholder="请输入需要查询的内容"
                    style={{width: 200}}
            />)
    }
}

export default SearchInput;
