import React, {FC, useEffect} from "react";
import {useState} from "react";
import './ScheduleItem.scss'
import { useSelector} from "react-redux";
import {RootState} from "../../../store/rootReducer";

interface ScheduleItemProps {
    value: any,
    activeItem?: boolean,
    onClick?: (value?: any) => void,
    clear?: any,
    selectHour?: any,
    deleteHour?: any,
    currentDay?: {} | any
}

export const ScheduleItem: FC<ScheduleItemProps> = ({
                                                        value,
                                                        currentDay,
                                                        deleteHour,
                                                        activeItem,
                                                        onClick,
                                                        clear,
                                                        selectHour
                                                    }) => {

    const [active, setActive] = useState<any>(false);
    const [clickable, setClickable] = useState<any>(false);
    const activeHour = useSelector((state: RootState) => state.main.activeHours)

    const activeHandler = () => {
        setActive(!active)
        setClickable(!clickable)
        active ? selectHour(value) : deleteHour(value)
    }

    const initializeDays = () => {
        setActive(true)
        setClickable(!clickable)
    }

    useEffect(() => {
        clear && setActive(false)
    }, [clear]);

    useEffect(() => {
        activeHour.filter((hour: number) => hour === value).length
            ? setActive(true)
            : !clickable && setActive(activeItem || false)
    }, [activeHour, activeItem])


    useEffect(() => {
        currentDay.hours.filter((hour: number) => hour === value).length && initializeDays()
    }, []);

    useEffect(() => {
        active ? selectHour(value) : deleteHour(value)
    }, [active]);


    return (
        <div className={`schedule-item ${active ? 'active' : ''}`} onClick={onClick || activeHandler}/>
    )
}