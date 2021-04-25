import React from 'react';
import {Header, Step} from "semantic-ui-react";
import { useSelector } from 'react-redux'
import NoDataFound from "./nodatafound";
import MenuList from "./menulist";

const VerticalMenu = ({title, id})=>{
    const state = useSelector(state => state);

    const getMenuList = ()=>{
        switch (id){
            case 'section':
                return (
                    <MenuList id={id} list={state.sections.map(s=>s.name)}/>
                )
            case 'item':
                const selectedSection = state.sections.filter(s=>s.name=== state.selectedSection);
                console.log('VerticalMenu::selectedSection:',selectedSection);
                return (
                    <MenuList id={id} list={selectedSection}/>
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