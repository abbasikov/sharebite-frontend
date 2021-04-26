/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return objectAssign({}, state, {
 *       stateVariable: action.var
 *   });
 */
import _ from 'lodash';
import {
  INITIAL_STATE,
  SET_SELECTED_SECTION,
  SET_SELECTED_ITEM,
  SET_SELECTED_OPTION,
  SET_SELECTED_CHOICE,
  SET_ADD_SECTION,
  SET_ADD_ITEM
} from '../../constants/AppConstants';

// Object.assign is not yet fully supported in all browsers, so we fallback to a polyfill
const objectAssign = Object.assign || require('object.assign');

// Takes care of changing the application state
// Never mutate or manipulate state directly. Always return a new state.
export default function rootReducer(state = INITIAL_STATE, action = null) {
  console.log('in reducer::type ', action.type)
  console.log('in reducer::state ', state);
  switch (action.type) {
    case SET_SELECTED_SECTION:
      return objectAssign({}, state, {
        selectedSection: _.isEmpty(action.payload) ? '' : action.payload
      });
    case SET_SELECTED_ITEM:
      return objectAssign({}, state, {
        selectedItem: _.isEmpty(action.payload) ? {} : action.payload
      });
    case SET_SELECTED_OPTION:
      return objectAssign({}, state, {
        selectedOption: _.isEmpty(action.payload) ? {} : action.payload
      });
    case SET_SELECTED_CHOICE:
      return objectAssign({}, state, {
        selectedChoice: _.isEmpty(action.payload) ? {} : action.payload
      });
    case SET_ADD_SECTION:
      return objectAssign({}, state, {
        sections: [...state.sections, action.payload]
      });
    case SET_ADD_ITEM:
      state.sections.forEach(s=>{
        if(s.name === state.selectedSection.name){
          s.items.push(action.payload)
        }
      })
      return objectAssign({}, state, {
        sections: [...state.sections]
      });
    default:
      return state;
  }
}
