import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    page: {
        width: "100%",
        height: "100%",
        //background: theme.palette.page.light,
    }
}));

export function MainPage(props) {
    const classes = useStyles();

    

    return(
        <div className={classes.page}>
            
        </div>
    );
}
