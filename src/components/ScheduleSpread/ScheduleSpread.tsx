import React, {FC, useEffect} from "react";
import {useState} from "react";
import {ScheduleItem} from "../../templates/ScheduleTemps/ScheduleItem";


interface ScheduleSpreadProps {
    day: {} | any,
    hours: [] | any,
    activeHours: {}
}

export const ScheduleSpread: FC<ScheduleSpreadProps> = ({day, hours, activeHours}) => {
    const [activeWeek, setActiveWeek] = useState<boolean>(false);
    const [currentData, setCurrentData] = useState(day);

    useEffect(() => {
        activeHours !== 0 && setCurrentData((prevState: any) => ({
            ...prevState,
            hours: [...prevState.hours.filter((i: number) => i !== activeHours), activeHours]
        }))
    }, [activeHours])

    const selectHour = (hour: number) => {
        console.log(currentData.hours)
        setCurrentData((prevState: any) => ({
            ...prevState,
            hours: [...prevState.hours, hour]
        }))
    }

    const deleteHour = (hour: number) => setCurrentData((prevState: any) => ({
        ...prevState,
        hours: [...prevState.hours.filter((i: number) => i !== hour)]
    }))

    return (
        <div key={day.date} className={'schedule__vertical'}>
            {day.date}
            <ScheduleItem value={day.date} activeItem={activeWeek} onClick={() => {
                setActiveWeek(!activeWeek)
                console.log(activeWeek)
            }}/>
            <div className={'schedule__day'}>
                {hours.map((i: number) => <ScheduleItem key={i} activeItem={activeWeek} activeHours={activeHours}
                                                        selectHour={selectHour}
                                                        deleteHour={deleteHour}
                                                        value={i}/>)}
            </div>
        </div>

    )
}