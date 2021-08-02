import React, { useState} from "react";
import './MasterCreator.scss'
import {IMaster} from "../../types/types";
import { FC } from "react";
import {CreateModal} from "../CreateModal/CreateModal";


interface MasterCreatorProps {
    masterData?: IMaster
}

export const MasterCreator:FC<MasterCreatorProps> = () => {
    const [modalHidden, setModalHidden] = useState<boolean>(true);

    return (
        <div className={'master-creator'}>
            <p className={'master-creator__title'}>Мастера салона</p>
            <div onClick={() => setModalHidden(false)} className={'master-creator__add-btn'}>
                <i className="bi bi-plus-lg"/>
                <p>Добавить мастера</p>
            </div>

            {!modalHidden &&
                <CreateModal closeHandler={(value) => setModalHidden(value)} visible={modalHidden} />
            }
        </div>
    )
}