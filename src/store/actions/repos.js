/* eslint-disable camelcase */
import { api } from '../../api';
import { setRepos, setTotalRepos, setIsLoadingRepos } from '../slices/reposSlice';
import { Notification } from '../../utils/NotificationSystem';

export const fetchRepos = ({ query: q, per_page, page, sort }) => async (dispatch) => {
  dispatch(setIsLoadingRepos({ isLoadingRepos: true }));
  try {
    const response = await api.get({ path: '/search/repositories', params: { q, per_page, sort, page } });
    const { status, data } = response;
    if (status === 200) {  
      dispatch(setIsLoadingRepos({ isLoadingRepos: false }));
      dispatch(setRepos({ repos: data.items }));
      dispatch(setTotalRepos({ totalRepos: data.total_count }));
    }
  } catch (error) {
    dispatch(setIsLoadingRepos({ isLoadingRepos: false }));
    if (error.message === undefined) {
      Notification({ type: 'CANCEL_REQUEST_ERROR' });
    }
  }
};
