import {
  SET_SELECTED_SECTION,
  SET_SELECTED_ITEM,
  SET_SELECTED_OPTION,
  SET_SELECTED_CHOICE,
  SET_ADD_SECTION,
  SET_ADD_ITEM
} from '../../constants/AppConstants';
import _ from 'lodash';

export const setSelectedSection = (value) => (dispatch, state) => {
  const store = state();
  const arr = store.sections.filter(s=>s.name === value);
  dispatch({ type: SET_SELECTED_SECTION, payload: arr[0] });
  dispatch(setSelectedItem(''));
  dispatch(setSelectedOption(''));
  dispatch(setSelectedChoice(''));
};

export const setSelectedItem = (value) => (dispatch, state) => {
  const store = state();
  const arr = store.selectedSection.items.filter(s=>s.title === value);
  dispatch({ type: SET_SELECTED_ITEM, payload: arr[0] });
  dispatch(setSelectedChoice(''));
  dispatch(setSelectedOption(''));
};

export const setSelectedOption = (value) => (dispatch, state) => {
  const store = state();
  if(_.isEmpty(value)){
    dispatch({ type: SET_SELECTED_OPTION, payload: {} });
  }else{
    const arr = store.selectedItem.options.filter(s=>s.name === value);
    dispatch({ type: SET_SELECTED_OPTION, payload: arr[0] });
  }
};

export const setSelectedChoice = (value) => (dispatch, state) => {
  const store = state();
  if(_.isEmpty(value)){
    dispatch({ type: SET_SELECTED_CHOICE, payload: {} });
  }else{
    const arr = store.selectedOption.choices.filter(s=>s.name === value);
    dispatch({ type: SET_SELECTED_CHOICE, payload: arr[0] });
  }
};

// Add Methods
export const setAddSection = (value) => (dispatch) => {
  dispatch({ type: SET_ADD_SECTION, payload: value });
}

export const setAddItem = (value) => (dispatch) => {
  dispatch({ type: SET_ADD_ITEM, payload: value });
}
