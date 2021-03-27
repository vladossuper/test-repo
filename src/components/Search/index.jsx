import React from 'react';
import PropTypes from 'prop-types';
import { Paper, InputBase, IconButton, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { searchStyles } from './useStyles';
import { useDispatch } from 'react-redux';
import { setIsCancelRequest } from '../../store/slices/reposSlice';

export const Search = ({ handleSearchQuery, handleStop }) => {
    const classes = searchStyles();
    const dispatch = useDispatch();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Github Repos"
                inputProps={{ 'aria-label': 'search github repos' }}
                onChange={(e) => handleSearchQuery(e.target.value)}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Button onClick={() => handleStop()}>Stop</Button>
        </Paper>
    )
};

Search.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    handleStop: PropTypes.func.isRequired
};

