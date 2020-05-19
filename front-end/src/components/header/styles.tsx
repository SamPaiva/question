import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#379392'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    subtitle: {
        textAlign: 'right'
    },
    typography: {
        padding: theme.spacing(2),
        color: 'black',
    },
    link: {
        textDecoration: 'none'
    }
}));

export default useStyles;