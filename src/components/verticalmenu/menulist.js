import React, { useState } from 'react';
import {Menu} from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import {setSelectedSection} from "../../redux/actions";
import NoDataFound from "./nodatafound";

const MenuList = ({id,list})=>{
    const [activeItem, setActiveItem] = useState('');
    const dispatch = useDispatch();
    const handleItemClick = (val)=>{
        setActiveItem(val);
        switch (id){
            case 'section':
                dispatch(setSelectedSection(val));
                break;
        }
    }
    console.log('MenuList::id: ',id);
    console.log('MenuList::list: ',list);

    const getListData = ()=>{
        const listToReturn= list.map(str=>{
            return (
                <Menu.Item
                    name={str}
                    active={activeItem === str}
                    onClick={()=>{
                        handleItemClick(str);
                    }}
                    key={str}
                >
                    {str}
                </Menu.Item>
            )
        });

        if(listToReturn.length<1){
            return <NoDataFound/>
        }

        return (
            <Menu vertical>
                {listToReturn}
            </Menu>
        );
    }

    return (
        getListData()
    );
}

export default MenuList;