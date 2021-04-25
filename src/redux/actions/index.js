import {
  SET_SELECTED_SECTION,
  SET_SELECTED_ITEM,
  SET_SELECTED_OPTION,
  SET_SELECTED_CHOICE
} from '../../constants/AppConstants';

export const setSelectedSection = (value) => async dispatch => {
  dispatch({ type: SET_SELECTED_SECTION, payload: value });
};

export const setSelectedItem = (value) => async dispatch => {
  dispatch({ type: SET_SELECTED_ITEM, payload: value });
};

export const setSelectedOption = (value) => async dispatch => {
  dispatch({ type: SET_SELECTED_OPTION, payload: value });
};

export const setSelectedChoice = (value) => async dispatch => {
  dispatch({ type: SET_SELECTED_CHOICE, payload: value });
};
