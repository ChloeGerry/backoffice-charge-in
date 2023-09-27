import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../utils/store';

const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async () => {
  const response = await fetch('http://localhost:5173/usersData.json');
  console.log('response.json()', response.json());
  return (await response.json()) as UserState;
});

interface UserState {
  data: object | null;
  isLoading: boolean;
  hasFetchingDataFailed: boolean;
}

const initialState: UserState = {
  data: null,
  isLoading: false,
  hasFetchingDataFailed: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.hasFetchingDataFailed = false;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasFetchingDataFailed = false;
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.hasFetchingDataFailed = true;
        state.data = null;
      });
  },
});

export default userSlice.reducer;

export { fetchUserProfile };

export const selectUserProfile = (state: RootState) => state?.data;
