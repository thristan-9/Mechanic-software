import React, { useEffect, useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';

import { FaCarSide } from 'react-icons/fa';


export function C_SelectField(props){
    
    var style = props.style ? props.style : {};

    return (
        <div style={{display:"flex",alignItems:"center"}}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>{props.icon}</Icon>

            <FormControl variant="outlined" >
                <InputLabel>{props.label}</InputLabel>
                <Select
                    style={style}
                    value={undefined}
                    onChange={props.onChange}
                    label={props.label}
                >
                    {props.list.map((item,k)=>{
                        return(
                            <MenuItem value={k}>
                                <em>{item.label}</em>
                            </MenuItem>
                        )
                    })}
                  
                </Select>
            </FormControl>
        </div>
    )
}

export function C_SelectVehicle(props){
    
    const vehicleOptions = [{ value: "Carro" }, { value: "Moto" }/*, { value:"Bicicleta"}*/];
    const [vehicle, setVehicle] = useState("Carro");
    

    var style = props.style ? props.style : {};

    function onChange(e){
        setVehicle(e.target.value);
        if(props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{display:"flex",alignItems:"center"}}>
            {vehicle == "Carro" ?
                <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>
                    <FaCarSide/> 
                </Icon>
            :
                <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>
                    {vehicle == "Moto" ? "two_wheeler" : "pedal_bike"}
                </Icon>
            }
          
            <FormControl style={style} variant="outlined">
                <InputLabel>Veiculo</InputLabel>
                <Select
                    value={vehicle}
                    onChange={onChange}
                    label={"Veiculo"}
                >
                    {vehicleOptions.map((item, k) => {
                        return (
                            <MenuItem value={item.value}>
                                <em>{item.value}</em>
                            </MenuItem>
                        )
                    })}

                </Select>
            </FormControl>

        </div>
    )
}

export function C_SelectVehicleBrand(props){
    
    const brandOptions = [{ value: "Audi" }, { value: "Bmw" }, { value: "Chevrolet" }, { value: "Outra" }];
    const [brand, setBrand] = useState("Audi");

    var style = props.style ? props.style : {};

    useEffect((err, data) => {
        if (props.value)
            setBrand(props.value);

    }, []);

   
    function onChange(e) {
        setBrand(e.target.value);
        if (props.onChange)
            props.onChange(e);
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <Icon style={{ marginRight: 7 }} color={props.color ? props.color : "primary"}>{"public"}</Icon>

            <FormControl style={style} variant="outlined">
                <InputLabel>Marca</InputLabel>
                <Select
                    value={brand}
                    onChange={onChange}
                    label={"Marca"}
                >
                    {brandOptions.map((item, k) => {
                        return (
                            <MenuItem value={item.value}>
                                <em>{item.value}</em>
                            </MenuItem>
                        )
                    })}

                </Select>
            </FormControl>

        </div>
    )
}
