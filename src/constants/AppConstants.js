/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */

// The initial application state
export const INITIAL_STATE = {
  sections:[{
    name:'Lunch Specials',
    items:[{
      title:'Chicken Over Price',
      price:12,
      options:[{
        name:'Add Rice',
        choices:[
            {
              name:'White Rice',
              price:2
            },
            {
              name:'Brown Rice',
              price:2
            }
        ]
      }]
    }]
  }],
  selectedSection:'',
  selectedItem: {},
  selectedOption:{},
  selectedChoice:{}
};

//Actions
export const SET_SELECTED_SECTION = 'SET_SELECTED_SECTION';
export const SET_SELECTED_ITEM = 'SET_ITEM';
export const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';
export const SET_SELECTED_CHOICE = 'SET_SELECTED_CHOICE';

