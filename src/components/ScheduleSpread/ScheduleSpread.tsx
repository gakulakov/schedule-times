import React, {FC, useEffect} from "react";
import {useState} from "react";
import {ScheduleItem} from "../../templates/ScheduleTemps/ScheduleItem/ScheduleItem";
import {ScheduleMainItem} from "../../templates/ScheduleTemps/ScheduleMainItem/ScheduleMainItem";


interface ScheduleSpreadProps {
    day: {} | any,
    hours: [] | any,
    saveHandler?: any
}

export const ScheduleSpread: FC<ScheduleSpreadProps> = ({day, hours, saveHandler}) => {
    const [activeWeek, setActiveWeek] = useState<boolean>(false);
    const [currentData, setCurrentData] = useState(day);
    const date = new Date(day.date)


    const selectHour = (hour: number) => {
        setCurrentData((prevState: any) => ({
            ...prevState,
            hours: [...prevState.hours, hour]
        }))
    }

    const deleteHour = (hour: number) => setCurrentData((prevState: any) => ({
        ...prevState,
        hours: [...prevState.hours.filter((i: number) => i !== hour)]
    }))

    useEffect(() => {
        saveHandler(currentData)
    }, [currentData])

    useEffect(() => {
        setCurrentData(day)
    }, [day]);


    const hoursGenerate = () => hours.map((i: number) => <ScheduleItem key={i + currentData.date}
                                                                       currentDay={currentData}
                                                                       activeItem={activeWeek}
                                                                       selectHour={selectHour}
                                                                       deleteHour={deleteHour}
                                                                       value={i}/>)


    return (
        <div key={day.date} className={'schedule__vertical'}>
            <div className={'schedule__date'}>
                {date.toLocaleString("ru", {weekday: "short", day: "numeric", month: "numeric"})}
            </div>
            <ScheduleMainItem activeItem={activeWeek}
                              onClick={() => {
                                  setActiveWeek(!activeWeek)
                              }}/>
            <div className={'schedule__day'}>
                {hoursGenerate()}
            </div>
        </div>

    )
}