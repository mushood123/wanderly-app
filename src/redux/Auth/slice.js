import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducer';

const initialState = {
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers,
});

export const authReducer = authSlice.reducer;
