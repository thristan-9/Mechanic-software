import React, { useEffect, useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    DatePicker,
} from '@material-ui/pickers';
import Icon from '@material-ui/core/Icon';

// export function C_DatePicker2(props) {

//     var style = props.style ? props.style : {};

//     function onChange(e){
//         if(props.onChange)
//             props.onChange(e);
//     }

//     return (
//         <div style={{ display: "flex", alignItems: "center" }}>
//             <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>{props.icon}</Icon>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                     label={props.label}
//                     value={props.value ? props.value : new Date()}
//                     disableToolbar={props.disableToolbar ? true : false}
//                     disableFuture={props.disableFuture ? true : false}
//                     views={props.views ? props.views : undefined}
//                     openTo={props.openTo ? props.openTo : "date"}
//                     format={props.format ? props.format : "dd/MM/yyyy"}
//                     autoOk
//                     inputVariant="outlined"
//                     variant="inline"
//                     onChange={onChange}
//                     InputAdornmentProps={{ position: "start" }}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date',
//                     }}
//                 />
//             </MuiPickersUtilsProvider>
//         </div>
//     )
// }

export function C_DatePicker(props) {

    var style = props.style ? props.style : { width: "100%" };

    function onChange(date){
        if(props.onChange)
            props.onChange(date);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>{props.icon}</Icon>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    label={props.label}
                    value={props.value ? props.value : new Date()}
                    disableToolbar={props.disableToolbar ? true : false}
                    disableFuture={props.disableFuture ? true : false}
                    views={props.views ? props.views : ["year" , "date" , "month"]}
                    openTo={props.openTo ? props.openTo : "date"}
                    format={props.format ? props.format : "dd/MM/yyyy"}
                    autoOk
                    inputVariant="outlined"
                    variant="dialog"
                    onChange={onChange}
                    style={style}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}