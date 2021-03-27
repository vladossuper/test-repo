import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from '../../store/actions';
import { Search } from '../../components/Search';
import { Grid, CircularProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { CardItem } from '../../components/CardItem';
import { useDebounce } from '../../hooks/useDebounce';
import { reposStyles } from './useStyles';
import axios from 'axios'

const REPOS_PER_PAGE = 30;
const cancelTokenSource = axios.CancelToken.source();

export const Repos = () => {
  const classes = reposStyles();
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [starsFilter, setStarsFilter] = useState(false);

  const { debounceSearch, prevDebounceSearch } = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (debounceSearch.length > 2) {
      dispatch(fetchRepos({ query: debounceSearch, page, per_page: REPOS_PER_PAGE, stars: starsFilter && 'stars', cancelToken: cancelTokenSource.token }))
    }
  }, [ debounceSearch, page, starsFilter ]);

  const { repos, totalRepos, isLoadingRepos } = useSelector((state) => state.repos);

  const pages = useMemo(() => totalRepos && Math.ceil(totalRepos / REPOS_PER_PAGE), [totalRepos]);

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  }

  const handleStop = () => {
    cancelTokenSource.cancel();
  }

  return (
    <Grid container spacing={3}>
      <Grid container item justify='center' xs={12} className={classes.search}>
        <Search handleSearchQuery={handleSearchQuery} handleStop={handleStop} />
      </Grid>
      <Grid item container justify='center' xs={12}>
        { isLoadingRepos ? 
          <CircularProgress /> : 
          <Grid item xs={8} >
            {
              repos && repos.map((repo) => (
                <CardItem key={repo.id} repo={repo} />
              ))
            }
          </Grid>
        }
      </Grid>
      <Grid container justify='center' item xs={12}>
        { pages && <Pagination count={pages} page={page} onChange={(_, value) => setPage(value)} /> }
      </Grid>
    </Grid>
  );
};
