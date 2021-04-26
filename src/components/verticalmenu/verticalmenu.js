import React, {useState} from 'react';
import {Header, Step, Button, Transition, Input} from "semantic-ui-react";
import { useSelector, useDispatch } from 'react-redux'
import NoDataFound from "./nodatafound";
import MenuList from "./menulist";
import _ from 'lodash';
import {setAddSection, setAddItem} from "../../redux/actions";

const VerticalMenu = ({title, id})=>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleAdd = ()=>{
        setInputValue('');
        setInputVisible(!inputVisible);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            switch (id){
                case 'section':
                    dispatch(setAddSection({
                        name:inputValue,
                        items:[]
                    }))
                    break;
                case 'item':
                    dispatch(setAddItem({
                        title:inputValue,
                        price:0,
                        options:[]
                    }))
                    break;
                case 'option':
                    break;
                case 'choice':
                    break;
                default:
                    break;
            }
            toggleAdd();

        }
    }

    const onChangeInput = (e,data)=>{
        setInputValue(data.value);
    }

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
                    {title} <Button onClick={toggleAdd} color={'orange'} compact>Add</Button>
                </Header>
                <Transition visible={inputVisible} animation='slide down' duration={500}>
                    <Input onChange={onChangeInput} value={inputValue} onKeyDown={handleKeyDown} placeholder='Enter name of section' />
                </Transition>
                {getMenuList()}
            </Step.Content>
        </Step>
    )
}

export default VerticalMenu;