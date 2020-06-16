import React from 'react'
//reducer
import { stateReducer } from '../reducers/indexReducer';
import { createStore } from 'redux';


export const Store = createStore(stateReducer);
