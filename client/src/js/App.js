import React, { useState, useEffect } from "react";
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal, red } from '@material-ui/core/colors';

import {MenuBar} from './Components/core/menuBar/MenuBar';
import {MainPage} from './Components/pages/mainPage/MainPage';
import {Clients} from './Components/pages/clients/Clients';


export function App() {

  const theme = createMuiTheme({

    fontSize: {
      h1: "calc(20px + (25 - 14) * ((150vh - 300px) / (1600 - 300)))",
      h2: "calc(20px + (25 - 14) * ((150vh - 400px) / (1600 - 300)))",
      h3: "calc(20px + (25 - 14) * ((150vh - 500px) / (1600 - 300)))",
    },

    palette: {
      primary: {
        //light: '#757ce8',
        main: teal[500],
        //dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        //light: '#ff7961',
        main: red[500],
        //dark: '#ba000d',
        contrastText: '#000',
      },
      gray: "#b2b2b2",
      page: {
        light: "white",
      },
    },

  });

  const [pageSelected, setpageSelected] = useState("MAINPAGE");
  const [device, setDevice] = useState("MONITOR");

  useEffect((err, data) => {

    var mql = window.matchMedia("(max-width: 850px)");

    if (mql.matches)
      setDevice("MOBILE");

  }, []);


  function onChangePage(pageName) {
    setpageSelected(pageName);
  }


  return(
    <ThemeProvider theme={theme}>
      <div id="App">
        <div style={{ display: "flex", flexDirection: device == "MONITOR" ? undefined : "column", justifyContent: device == "MONITOR" ? undefined : "space-between" }}>

          {device == "MONITOR" ?
            <MenuBar device={device} onClick={(pageName) => onChangePage(pageName)} />
          : undefined}
          
          <div style={{ width: `calc(100vw - ${device == "MONITOR" ? "60px" : "0px"})`, height: `calc(100vh - ${device == "MONITOR" ? "0px" : "50px"})`}}>

            {pageSelected === "MAINPAGE" ?
              <MainPage device={device} />
            :
              (pageSelected === "CLIENTS" ?
                <Clients device={device}/>
              : undefined)
            }

          </div>

          {device == "MOBILE" ?
            <MenuBar device={device} onClick={(pageName) => onChangePage(pageName)} />
          : undefined}

        </div>
      </div> 
    </ThemeProvider>
  )
}
