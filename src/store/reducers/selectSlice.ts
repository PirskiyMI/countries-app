import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISelect {
   isActive: boolean;
}

const initialState: ISelect = {
   isActive: false,
};

export const selectSlice = createSlice({
   name: 'selectSlice',
   initialState,
   reducers: {
      toggleSelect(state, action: PayloadAction<boolean>) {
         state.isActive = action.payload;
      },
   },
});

export default selectSlice.reducer;
