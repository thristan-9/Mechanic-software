import React, { useState, useEffect} from 'react';

import './MenuBarStyle.css';
import { C_Icon } from '../Components/C_Button';

export function MenuBar(props) {
     
    return (
        <div className="menuBar blur">

            <div className="option">
                <C_Icon onClick={() => props.onClick("MAINPAGE")} icon="home" />
            </div>

            <div className="option">
                <C_Icon onClick={() => props.onClick("CLIENTS")} icon="people" />
            </div>

        </div>
    )
}

