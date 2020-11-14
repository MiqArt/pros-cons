import { createStore, compose } from 'redux';
import uuid from 'react-uuid';
import { RESET_STATE, CREATE_ITEM, REMOVE_ITEM, EDIT_ITEM } from './actions';
import createReducer from './createReducer';

const initialState = {
  prosCons: [{ id: uuid(), text: "", type: "pros" }, { id: uuid(), text: "", type: "cons" }]
}

const reducer = createReducer(initialState, {
  [RESET_STATE]: () => {
    return initialState;
  },
  [CREATE_ITEM]: (state, action) => {
    let newState = [...state.prosCons];
    newState.push({ id: uuid(), text: action.text, type: action.itemType });
    return {
      ...state,
      prosCons: newState
    };
  },
  [REMOVE_ITEM]: (state, action) => {
    let newState = state.prosCons.filter(el => el.id !== action.id)
    return {
      ...state,
      prosCons: newState
    };
  },
  [EDIT_ITEM]: (state, action) => {
    let newState = [...state.prosCons];
    newState.find(el => el.id === action.id).text = action.text;
    return {
      ...state,
      prosCons: newState
    };
  }
});

const store = createStore(reducer, compose());
export default store;