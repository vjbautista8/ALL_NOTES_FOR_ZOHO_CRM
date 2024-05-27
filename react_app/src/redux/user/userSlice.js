import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedList, getSelectedRecordByID } from './zoho';

const initialState = {
  SERVICE_ORIGIN: null,
  PAGE: null,
  METADATA: null,
  CURRENT_TAB: '',
  TABS: [
    { name: 'Contacts', color: '#338cf0' },
    { name: 'Leads', color: '#cd5c5c' },
    { name: 'Deals', color: '#007544' },
  ],
  OPTIONS_TABS: ['Contacts', 'Leads', 'Deals'],
  CURRENT_RECORD_DATA: null,
  LOADING: true,
  RELATED_LIST: [],
  OPEN_SIDEBAR_MODULES: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleStateChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      //===================== getSelectedRecordByID
      .addCase(getSelectedRecordByID.pending, (state) => {
        state.LOADING = true;
      })
      .addCase(getSelectedRecordByID.fulfilled, (state, { payload }) => {
        const data = payload?.data[0];
        state.CURRENT_RECORD_DATA = data;

        state.LOADING = false;
      })
      .addCase(getSelectedRecordByID.rejected, (state) => {
        state.LOADING = false;
      }) //===================== getRelatedList
      .addCase(getRelatedList.pending, (state, { meta }) => {
        console.log(meta);
        state.LOADING = true;
      })
      .addCase(getRelatedList.fulfilled, (state, { payload }) => {
        console.log(payload);
        const data = payload?.related_lists;
        if (data) state.RELATED_LIST = data;

        state.LOADING = false;
      })
      .addCase(getRelatedList.rejected, (state) => {
        state.LOADING = false;
      });
  },
});
export const { handleStateChange } = userSlice.actions;
export default userSlice.reducer;
