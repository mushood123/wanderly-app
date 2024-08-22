import {createSlice} from '@reduxjs/toolkit';
import {reducers} from './reducer';

const initialState = {
  allOffers: null,
  createdOffer: null,
  modalVisibility: false,
  acceptedPackage: null,
};

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers,
});

export const packageReducer = packageSlice.reducer;
