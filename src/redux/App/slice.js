import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducer';

const initialState = {
    appLoading: true,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers,
});

export const appReducer = appSlice.reducer;
