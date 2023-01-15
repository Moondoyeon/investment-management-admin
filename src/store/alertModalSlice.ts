import { createSlice } from '@reduxjs/toolkit';

export interface IAlertModalState {
  isOpen: boolean;
  content: string;
}

const initialState: IAlertModalState = {
  isOpen: false,
  content: '',
};

export const alertModalSlice = createSlice({
  name: 'alertModal',
  initialState,
  reducers: {
    showModal: (state, action: { payload: string }) => {
      state.content = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { showModal, closeModal } = alertModalSlice.actions;
