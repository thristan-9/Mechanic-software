import React, { useState, useEffect } from 'react';

import '../../core/CoreStyle.css';
import { C_Button, C_Icon } from '../../core/Components/C_Button';
import { C_Modal } from '../../core/Components/C_Modal';
import { C_TextField, C_TextFieldCpf, C_TextFieldMobile, C_TextFieldObs, C_TextFieldKilometragem } from '../../core/Components/C_TextField';
import { C_SelectVehicle, C_SelectVehicleBrand } from '../../core/Components/C_SelectFields';
import { C_DatePicker } from '../../core/Components/C_DatePicker';
import helper from '../../core/Helper';
import { makeStyles } from '@material-ui/core';

import "../../core/CoreStyle.css";

const useStyles = makeStyles((theme) => ({
    topDiv: {
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 10px 0px 10px",
    },

    page: {
        width: "100%",
        height: "100%",
        background: theme.palette.page.light,
    },

    tittle: {
        fontSize: theme.fontSize.h1,
    },

    wrapFields: { width: "100%", alignItems: "center", marginBottom: "25px" },

}));

export function Clients(props) {
    const classes = useStyles();

    const [showModalClient, setShowModalClient] = useState(false);
    const [showCarFields, setShowCarFields] = useState(false);
    
    //field client value
    const [clientSearch, setClientSearch] = useState(undefined);
    const [clientName, setClientName] = useState(undefined);
    const [errorClientName, setErrorClientName] = useState(false);
    const [clientDocumentId, setClientDocumentId] = useState(undefined);
    const [clientPhoneNumber, setClientPhoneNumber] = useState(undefined);
    const [clientEmail, setClientEmail] = useState(undefined);
    const [clientObs, setClientObs] = useState(undefined);


    //field vehicle values
    const [vehicleType, setVehicleType] = useState("Carro");
    const [vehicleBrand, setVehicleBrand] = useState("Audi");
    const [vehicleModel, setVehicleModel] = useState(undefined);
    const [vehicleDate, setVehicleDate] = useState(new Date());
    const [vehicleLicensePlate, setVehicleLicensePlate] = useState(undefined);
    const [vehicleKilometragem, setVehicleKilometragem] = useState(undefined);
    const [vehicleObs, setVehicleObs] = useState(undefined);


    function verifyOnOk() {

        if (showCarFields){
            registerClient();
        }else{
            if (clientName){
                setErrorClientName(false);
                setShowCarFields(true);
            }else{
                setErrorClientName(true);
            }

        }
    }

    function registerClient() {

        var ClientData = {
            Name: clientName,
            DocumentId: clientDocumentId,
            PhoneNumber: clientPhoneNumber,
            Email: clientEmail,
            Notes: clientObs,
        };

        var VehicleData = {
            Type: vehicleType,
            Brand: vehicleBrand,
            Model: vehicleModel,
            Year: vehicleDate.getFullYear(),
            LicensePlate: vehicleLicensePlate,
            Kilometragem: parseInt(vehicleKilometragem),
            Notes: vehicleObs,
        };

        helper.Post("/api/client/create", { ClientData: ClientData, VehicleData: vehicleModel ? VehicleData : undefined }, false, (err, ret) => {
            setShowModalClient(false);

            setClientName(undefined)
            setClientDocumentId(undefined)
            setClientPhoneNumber(undefined)
            setClientEmail(undefined)
            setClientObs(undefined)

            setVehicleType("Carro")
            setVehicleBrand("Audi")
            setVehicleModel(undefined)
            setVehicleDate(new Date())
            setVehicleLicensePlate(undefined)
            setVehicleKilometragem(undefined)
            setVehicleObs(undefined)
            setShowCarFields(undefined)
        });
    }

    function searchClient(){

    }


    return (
        <div className={classes.page}>
            <div className="fade-in">
                
                <div className={classes.topDiv}>
                    <p className={classes.tittle}>Clientes</p>
                    <C_Button onClick={() => setShowModalClient(true)} icon="person_add" label="Cadastrar" />
                </div>

                <div style={{display: "flex", alignItems: "center", margin: 10}}>
                    <C_TextField value={clientSearch} onChange={(e) => setClientSearch(e.target.value)} style={{ width: 250 }} label="Pesquizar Cliente"/>
                    <C_Icon onClick={searchClient} icon="search"/>
                </div>

                <C_Modal onOkLabel={showCarFields ? "Cadastrar" : "Proximo"} onOk={verifyOnOk} onCancel={() => { setShowModalClient(false); setShowCarFields(false); setErrorClientName(false)}} backProperty={showCarFields} onBack={() => setShowCarFields(false)} tittle={showCarFields ? "Dados do Automovel" : "Dados do Cliente"} show={showModalClient}>

                    {!showCarFields ? 
                        <div className="fade-in">
                        
                            <div className={classes.wrapFields} style={{ display: props.device == "MOBILE" ? "block" : "flex" }}>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "59%", marginRight: props.device == "MOBILE" ? undefined : "2%", marginBottom: props.device == "MOBILE" ? "20px" : undefined }}>
                                    <C_TextField error={errorClientName} required={true} value={clientName} onChange={(e) => setClientName(e.target.value)} autoFocus={true} style={{ width: "100%" }} label="Nome Completo" icon="person" />
                                </div>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "39%" }}>
                                    <C_TextFieldCpf value={clientDocumentId} onChange={(e) => setClientDocumentId(e.target.value)} style={{ width: "100%" }} />
                                </div>
                            </div>

                            <div className={classes.wrapFields} style={{ display: props.device == "MOBILE" ? "block" : "flex" }}>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "39%", marginRight: props.device == "MOBILE" ? undefined : "2%", marginBottom: props.device == "MOBILE" ? "20px" : undefined }}>
                                    <C_TextFieldMobile value={clientPhoneNumber} onChange={(e) => setClientPhoneNumber(e.target.value)} style={{ width: "100%" }} />
                                </div>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "59%" }}>
                                    <C_TextField value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} style={{ width: "100%" }} label="Email" icon="email"/>
                                </div>
                            </div>

                            <div style={{ width: "100%" }}>
                                <C_TextFieldObs value={clientObs} onChange={(e) => setClientObs(e.target.value)} />
                            </div>
                        </div>
                
                        :

                        <div className="fade-in">

                            <div className={classes.wrapFields} style={{ display: props.device == "MOBILE" ? "block" : "flex" }}>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "49%", marginRight: props.device == "MOBILE" ? undefined : "2%", marginBottom: props.device == "MOBILE" ? "20px" : undefined }}>
                                    <C_SelectVehicle onChange={(e) => setVehicleType(e.target.value)} style={{ width: "100%" }} />
                                </div>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "49%" }}>
                                    <C_SelectVehicleBrand value={vehicleBrand} onChange={(e) => setVehicleBrand(e.target.value)} style={{ width: "100%" }} />
                                </div>
                            </div>

                            <div className={classes.wrapFields} style={{ display: props.device == "MOBILE" ? "block" : "flex" }}>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "49%", marginRight: props.device == "MOBILE" ? undefined : "2%", marginBottom: props.device == "MOBILE" ? "20px" : undefined }}>
                                    <C_TextField required={true} value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} style={{ width: "100%" }} icon="commute" label="Modelo" />
                                </div>
                                <div style={{ width: props.device == "MOBILE" ? "100%" : "49%" }}>
                                    <C_DatePicker style={{ width: "100%" }}  value={vehicleDate} onChange={(date) => setVehicleDate(date)} icon="date_range" format="yyyy" openTo={"year"} views={["year"]} disableFuture={true} label="Ano"/>
                                </div>
                            </div>

                            {vehicleType != "Bicicleta" ? 
                                <div className={classes.wrapFields} style={{ display: props.device == "MOBILE" ? "block" : "flex" }}>
                                    <div style={{ width: props.device == "MOBILE" ? "100%" : "49%", marginRight: props.device == "MOBILE" ? undefined : "2%", marginBottom: props.device == "MOBILE" ? "20px" : undefined }}>
                                        <C_TextField value={vehicleLicensePlate} onChange={(e) => setVehicleLicensePlate(e.target.value)} style={{ width: "100%" }} icon="assignment" label="Placa" />
                                    </div>
                                    <div style={{ width: props.device == "MOBILE" ? "100%" : "49%" }}>
                                        <C_TextFieldKilometragem value={vehicleKilometragem} onChange={(e) => setVehicleKilometragem(e.target.value)} icon="speed" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            : undefined}

                            <div style={{width: "100%"}}>
                                <C_TextFieldObs value={vehicleObs} onChange={(e) => setVehicleObs(e.target.value)} style={{ width: "100%" }}/>
                            </div>

                        </div>
                    }

                </C_Modal>
            </div>

        </div>
    );
}

