import {
  SET_SELECTED_SECTION,
  SET_SELECTED_ITEM,
  SET_SELECTED_OPTION,
  SET_SELECTED_CHOICE
} from '../../constants/AppConstants';

export const setSelectedSection = (value) => async (dispatch, state) => {
  const store = state();
  const arr = store.sections.filter(s=>s.name === value);
  dispatch({ type: SET_SELECTED_SECTION, payload: arr[0] });
};

export const setSelectedItem = (value) => async (dispatch, state) => {
  const store = state();
  const arr = store.selectedSection.items.filter(s=>s.title === value);
  dispatch({ type: SET_SELECTED_ITEM, payload: arr[0] });
};

export const setSelectedOption = (value) => async (dispatch, state) => {
  const store = state();
  const arr = store.selectedItem.options.filter(s=>s.name === value);
  dispatch({ type: SET_SELECTED_OPTION, payload: arr[0] });
};

export const setSelectedChoice = (value) => async (dispatch, state) => {
  const store = state();
  const arr = store.selectedOption.choices.filter(s=>s.name === value);
  dispatch({ type: SET_SELECTED_CHOICE, payload: arr[0] });
};
