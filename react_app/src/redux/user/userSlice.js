import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  SERVICE_ORIGIN: null,
  PAGE: null,
  METADATA: null,
  CURRENT_TAB: 'Contacts',
  TABS: [
    { name: 'Contacts', color: '#338cf0' },
    { name: 'Leads', color: '#cd5c5c' },
    { name: 'Deals', color: '#007544' },
  ],
  OPTIONS_TABS: ['Contacts'],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleStateChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {},
});
export const { handleStateChange } = userSlice.actions;
export default userSlice.reducer;
