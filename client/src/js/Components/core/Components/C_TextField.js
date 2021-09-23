import React from 'react';
import helper from '../Helper';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

import { HiOutlineIdentification } from 'react-icons/hi';

export function C_TextField(props) {

    var style = props.style ? props.style : { width: "100%" };

    function onChange(e) {
        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {props.icon ? 
                <Icon style={{marginRight: 7}} color={props.color ? props.color : "primary"} >{props.icon}</Icon>
            : undefined}

            <TextField
                variant={props.variant ? props.variant : "outlined"}
                label={props.label}
                placeholder={props.placeholder}
                value={props.value}
                style={style}
                type={props.type}
                onChange={onChange}
                autoFocus={props.autoFocus}
                error={props.error}
                helperText={props.helperText}
                required={props.required}
            />
        </div>
    )
}

export function C_TextFieldObs(props) {

    var style = props.style ? props.style : { width: "100%" };

    function onChange(e) {
        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"} >{"subject"}</Icon>

            <TextField
                variant={props.variant ? props.variant : "outlined"}
                label={"Observação"}
                placeholder={props.placeholder}
                value={props.value}
                style={style}
                onChange={onChange}
                required={props.required}
            />
        </div>
    )
}

export function C_TextFieldCpf(props) {

    var style = props.style ? props.style : { width: "100%" };

    function onChange(e) {

        if (e.target.value && e.target.value.length > 18){
            var value = e.target.value + "";
            e.target.value = value.substring(0,18);
        }
    
        e.target.value = e.target.value.replace(/\D/g, '').substr(0,11);//never take off

        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>
                <HiOutlineIdentification />
            </Icon>

            <TextField
                variant={props.variant ? props.variant : "outlined"}
                label={"CPF"}
                placeholder={props.placeholder}
                value={helper.displayCPF(props.value)}
                style={style}
                onChange={onChange}
                error={props.error}
                helperText={props.helperText}
                required={props.required}
            />
        </div>
    )
}

export function C_TextFieldKilometragem(props) {

    var style = props.style ? props.style : { width: "100%" };

    function onChange(e) {

        if (e.target.value && e.target.value.length > 6){
            var value = e.target.value + "";
            e.target.value = value.substring(0,6);
        }

        e.target.value = e.target.value.replace(/\D/g, '').substr(0,6);//never take off

        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"} >{"speed"}</Icon>

            <TextField
                variant={props.variant ? props.variant : "outlined"}
                label={"Kilometragem"}
                placeholder={props.placeholder}
                value={props.value}
                style={style}
                onChange={onChange}
                error={props.error}
                helperText={props.helperText}
                required={props.required}
            />
        </div>
    )
}

// export function C_TextFieldCpfAndCnpj(props) {

//     var style = props.style ? props.style : {};

//     function onChange(e) {
//         console.log("e.target.value", e.target.value);

//         if (e.target.value && e.target.value.length > 18){
//             var value = e.target.value + "";
//             e.target.value = value.substring(0,18);
//         }
        
//         // console.log("e.target.value", e.target.value);
//         // console.log("e length",e.target.value.length);

//         // e.target.value = e.target.value.replace(/\D/g, '').substr(0, e.target.value.length > 14 ? 14 : 11);//never take off
//         // console.log("e.target. 2", e.target.value);

//         if (props.onChange)
//             props.onChange(e);
//     }

//     return (
//         <div style={{ display: "flex", alignItems: "center" }}>
//             <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>
//                 <HiOutlineIdentification />
//             </Icon>

//             <TextField
//                 variant={props.variant ? props.variant : "outlined"}
//                 label={props.value && props.value.length > 14 ? "CNPJ" : props.value && props.value.length > 0 ? "CPF" : "CPF/CNPJ"}
//                 placeholder={props.placeholder}
//                 value={props.value && props.value.length > 14 ? helper.displayCNPJ(props.value) : helper.displayCPF(props.value)}
//                 style={style}
//                 onChange={onChange}
//                 error = { props.error }
//                 helperText = { props.helperText }
//                 required = { props.required }

//             />
//         </div>
//     )
// }

export function C_TextFieldMobile(props) { 

    var style = props.style ? props.style : { width: "100%" };

    function onChange(e) {
        if (e.target.value && e.target.value.length > 15) {
            var value = e.target.value + "";
            e.target.value = value.substring(0, 15);
        }

        e.target.value = e.target.value.replace(/\D/g, '');//never take off

        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"} >{"phone_iphone"}</Icon>


            <TextField
                variant={props.variant ? props.variant : "outlined"}
                label={"Celular"}
                placeholder={props.placeholder}
                value={helper.displayMobile(props.value)}
                style={style}
                onChange={onChange}
                error={props.error}
                helperText={props.helperText}
                required={props.required}
            />
        </div>
    )
}