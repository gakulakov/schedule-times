import React, {FC, useEffect} from "react";
import './ Schedule.scss'
import axios from "axios";
import {config} from "../../api/config";
import {Modal} from "../../templates/Modals/Modal/Modal";
import {useState} from "react";
import {IDay} from "../../types/types";
import {ScheduleSpread} from "../ScheduleSpread/ScheduleSpread";
import {ScheduleMainItem} from "../../templates/ScheduleTemps/ScheduleMainItem/ScheduleMainItem";
import preloader from '../../assets/preloaders/puff.svg'


interface ScheduleProps {
    masterName: string,
    closeHandler: () => void,
    saveHandler: () => void
}

export const Schedule: FC<ScheduleProps> = ({masterName, closeHandler, saveHandler}) => {
    const [week, setWeek] = useState<[]>([]);
    const [activeHour, setActiveHour] = useState<boolean>(false)
    const [dataToServer, setDataToServer] = useState<any>([]);
    const [date, setDate] = useState<any>("2021-07-31");
    const mockWorkingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

    const getFormattedDate = (date: any) => {

        const year = date.getFullYear(),
            month = ('0' + (date.getMonth() + 1)).slice(-2),
            day = date.getDate()

        return [year, month, day].join('-')
    }

    useEffect(() => {
        const currentTime = new Date()

        setDate(getFormattedDate(currentTime))
    }, []);


    useEffect(() => {
        if (date) {
            const getWeek = async () => {
                const response = await axios.get(
                    `https://api-crm.krasa.io/api/v1/master_schedule?master_id=3002&date=${date}&days_num=6`,
                    {...config}
                )

                return response.data
            }
            getWeek().then(res => setWeek(res.response.dates))
        }

    }, [date])


    const weekGenerate = () => week?.map((day: IDay, index: number) => <ScheduleSpread key={index}
                                                                                       day={day}
                                                                                       hours={mockWorkingHours}
                                                                                       saveHandler={saveCustomizeWeek}
    />)

    const saveCustomizeWeek = (day: any) => {
        setDataToServer((prevState: any) => [...prevState.filter((data: any) => data.date !== day.date), day])
    }

    const sendToServer = (data: any) => {
        const url = 'https://api-crm.krasa.io/api/v1/master_schedule/3002'

        axios.put(url, {dates: [...data]}, {...config}).then(res => {
            saveHandler()
        })
    }

    return (
        <Modal title={`Расписание мастера ${masterName}`} closeHandler={closeHandler}
               saveHandler={() => sendToServer(dataToServer)}>
            {week.length ?
            <div>
                <div className={'schedule'}>
                    <div className={'schedule__day-info'}>
                        <i className="bi bi-caret-down-fill"/>
                        <p>Пометьте день как рабочий на всю неделю</p>
                    </div>
                    {weekGenerate()}
                    <div className={'schedule__horizontal'}>
                        <div className={'schedule__hour-info'}>
                            <p>Пометьте час как рабочий на всю неделю</p>
                            <i className="bi bi-caret-right-fill"/>
                        </div>
                        {mockWorkingHours.map((i: any, index) =>
                            <div className={'schedule__horizontal-item'} key={index}>
                                <ScheduleMainItem
                                    activeItem={activeHour}
                                    value={i}

                                    onClick={() => setActiveHour(true)}/>
                                {i}
                            </div>)}
                    </div>
                </div>

                <div className={'schedule__btn-container'}>
                    <div onClick={() => {
                        const currentTime = new Date(date)
                        currentTime.setDate(currentTime.getDate() - 7);
                        setDate(getFormattedDate(currentTime))
                    }} className={'schedule__btn'}>
                        Пред.
                    </div>

                    <div onClick={() => {
                        const currentTime = new Date(date)
                        currentTime.setDate(currentTime.getDate() + 7);
                        setDate(getFormattedDate(currentTime))
                    }} className={'schedule__btn'}>
                        След.
                    </div>
                </div>
            </div>
                : <div className={'schedule__preloader'}><img src={preloader} alt="preloader"/></div>
            }
        </Modal>
    )
}