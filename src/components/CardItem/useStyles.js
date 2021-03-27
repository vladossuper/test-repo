import { makeStyles } from '@material-ui/core/styles';

export const cardItem = makeStyles(() => ({
    card: {
        marginTop: 20
    },
    cardHeader: {
        display: 'flex',
        marginBottom: 20
    },
    cardHeaderLogin: {
        marginLeft: 20,
        marginTop: 5
    },
    starWrapper: {
        display: 'flex'
    },
    infoDescription: {
        marginLeft: 10,
        marginTop: 2
    },
    infoWrapper: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    }
}));