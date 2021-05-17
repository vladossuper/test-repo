import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepos } from '../../store/actions';
import { Search } from '../../components/Search';
import { Grid, CircularProgress, Typography, Button, Switch, FormControlLabel, Box } from '@material-ui/core';
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
  const [reposList, setReposList] = useState(null);
  const [prevReposList, setPrevReposList] = useState(null);
  const [page, setPage] = useState(1);
  const [starsFilter, setStarsFilter] = useState(false);
  const { debounceSearch, prevDebounceSearch } = useDebounce(searchQuery, 1000);

  const { repos, totalRepos, isLoadingRepos } = useSelector((state) => state.repos);
  const pages = useMemo(() => totalRepos && Math.ceil(totalRepos / REPOS_PER_PAGE), [totalRepos]);

  useEffect(() => {
    if (debounceSearch.length > 2) {
      dispatch(fetchRepos({ query: debounceSearch, page, per_page: REPOS_PER_PAGE, sort: starsFilter && 'stars' }))
    }
  }, [ debounceSearch, page, starsFilter, dispatch ]);

  useEffect(() => {
    setReposList(prevState => {
      setPrevReposList(prevState);
      return repos;
    });
  }, [repos]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleStop = () => {
    cancelTokenSource.cancel();
  };

  const handlePrevRequest = () => {
    setReposList(prevReposList);
  }

  return (
    <Grid container spacing={3}>
      <Grid container item justify='center' xs={12} className={classes.search}>
        {searchQuery}
        <Search handleSearchQuery={handleSearchQuery} handleStop={handleStop} />
      </Grid>
      {(totalRepos && totalRepos > 0) &&
        <Grid container item justify='center' xs={12}>
          <Typography variant='h6' align='center'>{totalRepos} repository results</Typography>
        </Grid>
      }
      <Grid item container justify='center' xs={12} className={classes.content}>
        { isLoadingRepos ? 
          <CircularProgress /> : 
            <>
              <Grid item xs={2}>
                {reposList && (
                  <Box mt={3}>
                    <Typography variant='subtitle2'>Sorted by:</Typography>
                    <FormControlLabel
                      control={<Switch checked={starsFilter} name='Star' onChange={() => setStarsFilter(!starsFilter)} />}
                      label='Star'
                    />
                  </Box>
                )}
              </Grid>
              <Grid item xs={8} >
                {
                  (reposList && reposList.length > 0) && 
                    reposList.map((repo) => (
                      <CardItem key={repo.id} repo={repo} />
                  ))
                } 
                {!reposList && <Typography variant='h5' align='center'>There is nothing... Search for the repo.</Typography>}
                {(reposList && reposList.length === 0) && <Typography variant='h5' align='center'>No repos with this name.</Typography>}
              </Grid>
              <Grid item container xs={2} justify='flex-end'>
                {prevReposList && (
                  <Box mt={3}>
                    <Typography variant='subtitle2'>Previous Request:</Typography>
                    <Button variant='outlined' onClick={handlePrevRequest}>{prevDebounceSearch}</Button>
                  </Box>
                )}
              </Grid>
            </>
        }
      </Grid>
      <Grid container justify='center' item xs={12}>
        { (reposList && reposList.length > 0) && <Pagination count={pages} page={page} onChange={(_, value) => setPage(value)} /> }
      </Grid>
    </Grid>
  );
};
