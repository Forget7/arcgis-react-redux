import {Checkbox, Menu} from "antd";
import React from 'react'

export const TocList = ({tocOptions, onChange}) => (
    <Menu id="toc"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%'}}
    >
        {
            tocOptions.map(tocOption =>
                <Menu.Item key={tocOption.id}>
                    <Checkbox id={tocOption.id.toString()} defaultChecked={true} onChange={onChange}>
                        {tocOption.title}
                    </Checkbox>
                </Menu.Item>
            )
        }
    </Menu>
)

export default TocList
