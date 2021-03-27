/* eslint-disable camelcase */
import { api } from '../../api';
import { setRepos, setTotalRepos, setIsLoadingRepos } from '../slices/reposSlice';


export const fetchRepos = ({ query: q, per_page, page, sort, cancelToken }) => async (dispatch) => {
  dispatch(setIsLoadingRepos({ isLoadingRepos: true }));
  try {
    const response = await api.get({ path: '/search/repositories', params: { q, per_page, sort, page }, cancelToken });
    const { status, data } = response;
    if (status === 200) {  
      dispatch(setIsLoadingRepos({ isLoadingRepos: false }));
      dispatch(setRepos({ repos: data.items }));
      dispatch(setTotalRepos({ totalRepos: data.total_count }));
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
