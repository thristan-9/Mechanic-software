import React from 'react';
import { C_Button, C_Icon} from './C_Button';

import "../CoreStyle.css";
import "./Modal.css";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tittle: {
        fontSize: theme.fontSize.h2,
    },

}));

export function C_Modal(props) {
    const classes = useStyles();


    function cancelModal() {
        if (props.onCancel)
            props.onCancel();
    }

    return (
        <>
            {props.show ?
                <div className="modal-background fade-in">

                    <div className={`${props.size === "large" ? props.size : `default`}-modal `}>
                        <div className="header-modal" >
                            <p className={classes.tittle}>{props.tittle}</p>
                            <C_Icon color="grey" onClick={cancelModal} icon="close" />
                        </div>

                        <div className="body-modal">
                            {props.children}
                        </div>

                        <div className="footer-modal">
                            {props.backProperty ?
                                <C_Icon style={{marginLeft:-10}} color="grey" onClick={props.onBack} icon="arrow_back" />
                            :undefined}

                            <div style={{display: "flex", alignItems: "center", width: "100%", justifyContent: "flex-end"}}>
                                <C_Button variant="outlined" onClick={cancelModal} label={props.onCancelLabel ? props.onCancelLabel : "Cancelar"} />
                                <C_Button style={{ marginLeft: 10 }} onClick={props.onOk} label={props.onOkLabel ? props.onOkLabel : "Ok"} />
                            </div>
                        </div>

                    </div>

                </div>
            : undefined}
        </>
    )
}