import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

var mql = window.matchMedia("(max-width: 550px)");
var device = "MONITOR";

if (mql.matches)
    device = "MOBILE";

export function C_Icon(props) {

    var style = props.style ? props.style : {};

    return (
        <IconButton
            onClick={props.onClick}
            color={props.color ? props.color : "primary"}
            aria-label="More Info"
            size={device === "MOBILE" ? "small" : "medium"}
            style={style}
        >
            <Icon>{props.icon}</Icon>
        </IconButton>
    )
}

export function C_Button(props) {

    var style = props.style ? props.style : {};

    return (
        <div>
            <Button
                onClick={props.onClick}
                color={props.color ? props.color : props.primary ? "primary" : props.secondary ? "secondary" : "primary"}
                variant={props.variant ? props.variant : "contained"}
                startIcon={props.icon ? <Icon>{props.icon}</Icon> : undefined}
                endIcon={props.endIcon ? <Icon>{props.endIcon}</Icon> : undefined}
                size={device === "MOBILE" ? "small" : "medium"}
                style={style}
            >
              {props.label}
            </Button>
        </div>
    )
}
