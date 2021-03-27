import { configureStore } from '@reduxjs/toolkit';
import { reposReducer } from './slices/reposSlice';

export default configureStore({
  reducer: {
    repos: reposReducer,
  },
});
