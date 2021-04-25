import React from 'react';
import {Header, Step} from "semantic-ui-react";
import { useSelector } from 'react-redux'
import NoDataFound from "./nodatafound";
import MenuList from "./menulist";
import _ from 'lodash';

const VerticalMenu = ({title, id})=>{
    const state = useSelector(state => state);

    const getMenuList = ()=>{
        switch (id){
            case 'section':
                return (
                    <MenuList id={id} list={state.sections.map(s=>s.name)}/>
                )
            case 'item':
                if(_.isEmpty(state.selectedSection)){
                    return (
                        <NoDataFound/>
                    )
                }
                return (
                    <MenuList id={id} list={state.selectedSection.items.map(s=>s.title)}/>
                )
            case 'option':
                if(_.isEmpty(state.selectedItem)){
                    return (
                        <NoDataFound/>
                    )
                }
                return (
                    <MenuList id={id} list={state.selectedItem.options.map(s=>s.name)}/>
                )
            case 'choice':
                if(_.isEmpty(state.selectedOption)){
                    return (
                        <NoDataFound/>
                    )
                }
                return (
                    <MenuList id={id} list={state.selectedOption.choices.map(s=>s.name)}/>
                )
            default:
                return <NoDataFound/>
        }
    }


    return (
        <Step>
            <Step.Content>
                <Header as='h3' dividing>
                    {title}
                </Header>
                {getMenuList()}
            </Step.Content>
        </Step>
    )
}

export default VerticalMenu;