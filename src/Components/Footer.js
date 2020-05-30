import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        footerRoot: {
            position: "absolute",
            bottom: 0,
            "& .footerText": {
                padding: "10px",
                marginBottom: "0px"
            }
        }
    }),
);


const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footerRoot}>
            <h1 className="footerText">Footer</h1>
        </div>
    )
};

export default Footer;