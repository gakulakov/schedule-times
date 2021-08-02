import React, {FC, useEffect} from "react";
import {IMaster} from "../../../types/types";
import './MasterCard.scss'
import {EditButton} from "../../Buttons/EditButton/EditButton";
import { useState } from "react";
import {CreateModal} from "../../../components/CreateModal/CreateModal";
import {Schedule} from "../../../components/ Schedule/ Schedule";


interface MasterCardProps {
    data: IMaster
}

export const MasterCard: FC<MasterCardProps> = ({data}) => {

    const [master, setMaster] = useState<IMaster>({...data});
    const [modalHidden, setModalHidden] = useState<boolean>(true);
    const [scheduleHidden, setScheduleHidden] = useState<boolean>(true);

    useEffect(() => {
        setMaster({...data})
    }, [data])

    return (
        <div className={'master-card'}>
            <h3>{data.name}</h3>
            <p>Номер телефона: +7{master.phoneNumber}</p>
            <p>Профессия: {master.sphere}</p>
            <p>О мастере: {master.description}</p>

            <div className={'master-card__editor'}>
                <EditButton title={'Редактировать'} icon={'bi bi-pencil'} onClick={() => setModalHidden(false)}/>
                <EditButton title={'Расписание'} icon={'bi bi-calendar-check'} onClick={() => setScheduleHidden(false)}/>
                <EditButton title={'Услуги'} icon={'bi bi-shop'}/>
            </div>

            {!modalHidden && <CreateModal closeHandler={(value => setModalHidden(value))} visible={modalHidden} masterData={master} />}
            {!scheduleHidden && <Schedule closeHandler={() => setScheduleHidden(true)} saveHandler={() => console.log('Hello')} masterName={master.name} />}
        </div>
    )
}