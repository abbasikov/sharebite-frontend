import React, { useState } from 'react';
import {Menu} from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import {setSelectedChoice, setSelectedItem, setSelectedOption, setSelectedSection} from "../../redux/actions";
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
            case 'item':
                dispatch(setSelectedItem(val));
                break;
            case 'option':
                dispatch(setSelectedOption(val));
                break;
            case 'choice':
                dispatch(setSelectedChoice(val));
                break;
            default:
                break;
        }
    }

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