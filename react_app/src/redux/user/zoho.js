import { createAsyncThunk } from '@reduxjs/toolkit';
const ZOHO = window.ZOHO;
export const getSelectedRecordByID = createAsyncThunk(
  'user/getSelectedRecordByID',
  async (data, thunkAPI) => {
    try {
      const response = ZOHO.CRM.API.getRecord({
        Entity: data.Entity,
        RecordID: data.RecordID,
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getRelatedList = createAsyncThunk(
  'user/getRelatedList',
  async (data, thunkAPI) => {
    try {
      const response = ZOHO.CRM.META.getRelatedList({
        Entity: data.Entity,
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);
