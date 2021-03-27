import { createSlice } from '@reduxjs/toolkit';

export const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    repos: null,
    totalRepos: null,
    isLoadingRepos: false,
    isCancelRequest: false
  },
  reducers: {
    setRepos: (state, { payload }) => {
      const { repos } = payload;
      state.repos = repos;
    },
    setTotalRepos: (state, { payload }) => {
      const { totalRepos } = payload;
      state.totalRepos = totalRepos;
    },
    setIsLoadingRepos: (state, { payload }) => {
      const { isLoadingRepos } = payload;
      state.isLoadingRepos = isLoadingRepos;
    },
    setIsCancelRequest: (state, { payload }) => {
      const { isCancelRequest } = payload;
      state.isCancelRequest = isCancelRequest;
    }
  },
});

export const { actions, reducer: reposReducer } = reposSlice;

export const { setRepos, setTotalRepos, setIsLoadingRepos, setIsCancelRequest } = actions;
