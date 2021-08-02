import React from "react";
import {Toolbar} from "../Toolbar/Toolbar";
import './Body.scss'
import {Masters} from "../Masters/Masters";

export const Body = () => {
    return (
        <div className={'app-body'}>
            <Toolbar />
            <Masters />
        </div>
    )
}