import React from "react";
import {MasterCard} from "../../templates/Cards/MasterCard/MasterCard";
import {IMaster} from "../../types/types";
import './Masters.scss'
import {MasterCreator} from "../MasterCreator/MasterCreator";
import {useSelector} from "react-redux";
import { RootState } from "../../store/rootReducer";


export const Masters = () => {

    const masters = useSelector((state: RootState) => state.main.masters)

    console.log(masters)

    const mastersGenerate = () => masters.map((i: IMaster) => <MasterCard key={i.id} data={i} />)

    return (
        <div className={'masters-container'}>
            <MasterCreator/>
            <div className={'masters-subcontainer'}>
                {mastersGenerate()}
            </div>
        </div>
    )
}