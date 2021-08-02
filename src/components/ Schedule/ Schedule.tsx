import React, {FC, useEffect} from "react";
import './ Schedule.scss'
import axios from "axios";
import {config} from "../../api/config";
import {Modal} from "../../templates/Modals/Modal/Modal";
import {ScheduleItem} from "../../templates/ScheduleTemps/ScheduleItem";
import {useState} from "react";
import {IDay} from "../../types/types";
import {ScheduleSpread} from "../ScheduleSpread/ScheduleSpread";


interface ScheduleProps {
    masterName: string,
    closeHandler: () => void,
    saveHandler: () => void
}

export const Schedule: FC<ScheduleProps> = ({masterName, closeHandler, saveHandler}) => {
    const [week, setWeek] = useState<any>([]);
    const [activeHours, setActiveHours] = useState(0);
    const mockWorkingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

    useEffect(() => {

        const getWeek = async () => {
            const response = await axios.get(
                'https://api-crm.krasa.io/api/v1/master_schedule?master_id=3002&date=2021-07-28&days_num=6',
                {...config}
            )

            return response.data
        }

        getWeek().then(res => setWeek(res.response.dates))
    }, [])


    console.log(week)
    const weekGenerate = () => week?.map((day: IDay, index: number) => <ScheduleSpread key={index}
                                                                                       activeHours={activeHours}
                                                                                       day={day}
                                                                                       hours={mockWorkingHours}/>)

    const activeHourHandler = (hour: number) => {
        setActiveHours(prevState => prevState === hour ? 0 : hour)
    }

    return (
        <Modal title={`Расписание мастера ${masterName}`} closeHandler={closeHandler} saveHandler={saveHandler}>
            <div className={'schedule'}>
                {weekGenerate()}
                <div className={'schedule__horizontal'}>
                    {mockWorkingHours.map((i: any) =>
                        <div className={'schedule__horizontal-item'}>
                            <ScheduleItem value={i} key={i} activeHours={activeHours}
                                          onClick={() => activeHourHandler(i)}/>
                            {i}
                        </div>)}
                </div>
            </div>

        </Modal>
    )
}