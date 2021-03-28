import React from 'react';
import PropTypes from 'prop-types';
import { Paper, InputBase, Button } from '@material-ui/core';
import { searchStyles } from './useStyles';

export const Search = ({ handleSearchQuery, handleStop }) => {
    const classes = searchStyles();

    return (
        <Paper component='form' className={classes.root} onSubmit={(e) => e.preventDefault()}>
            <InputBase
                className={classes.input}
                placeholder='Search Github Repos'
                inputProps={{ 'aria-label': 'search github repos' }}
                onChange={handleSearchQuery}
            />
            <Button onClick={handleStop}>Stop</Button>
        </Paper>
    )
};

Search.propTypes = {
    handleSearchQuery: PropTypes.func.isRequired,
    handleStop: PropTypes.func.isRequired
};

