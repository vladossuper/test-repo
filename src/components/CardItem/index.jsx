import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Avatar, Link } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import { cardItem } from './useStyles';

export const CardItem = ({ repo }) => {
    const classes = cardItem();

    return (
        <Card key={repo.id} className={classes.card}>
            <CardContent>
            <div className={classes.cardHeader}>
                <Avatar src={repo.owner.avatar_url} />
                <Typography variant='h5' component='h2' className={classes.cardHeaderLogin}>{repo.owner.login}</Typography>
            </div>
            <Link variant='h5' href={repo.html_url}>
                {repo.full_name}
            </Link>
            <Typography variant='body2' component='p'>
                {repo.description}
            </Typography>
            <div className={classes.infoWrapper}>
                <div className={classes.starWrapper}>
                <Star />
                <Typography variant='body2' component='p' className={classes.infoDescription}>
                    {repo.stargazers_count}
                </Typography>
                </div>
                {repo.language && (
                <div className={classes.starWrapper}>
                    <Typography variant='subtitle2' target='_blank' componen='p' className={classes.infoDescription}>
                    Language: 
                    </Typography>
                    <Typography variant='body2' component='p' className={classes.infoDescription}>
                    {repo.language}
                    </Typography>
                </div>
                )}
                
            </div>
            </CardContent>
        </Card>
    )
};

CardItem.propTypes = {
    repo: PropTypes.object.isRequired
}