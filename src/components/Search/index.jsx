import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, InputBase, Button } from '@material-ui/core';
import { searchStyles } from './useStyles';

export const Search = ({ handleSearchQuery, handleStop }) => {
    const classes = searchStyles();

    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
        handleSearchQuery(e);
        setSearch(e.target.value);
    }

    return (
        <Paper component='form' className={classes.root} onSubmit={(e) => e.preventDefault()}>
            <input
                className={classes.input}
                placeholder='Search Github Repos'
                onChange={searchHandler}
                value={search}
            />
            <Button onClick={handleStop}>Stop</Button>
        </Paper>
    )
};

Search.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    handleStop: PropTypes.func.isRequired
};

