import  React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchInput extends React.Component {
    render() {
        return (
            <Search placeholder="请输入key"
                    onSearch={(val)=>this.props.onSearch(val)}
                    style={{width:200}}>
            </Search>
        )
    }
}

export default SearchInput;