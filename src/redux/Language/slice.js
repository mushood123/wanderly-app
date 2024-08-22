import {createSlice} from '@reduxjs/toolkit';
import {reducers} from './reducer';

const initialState = {
  locale: 'en_US',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers,
});

export const languageReducer = languageSlice.reducer;
