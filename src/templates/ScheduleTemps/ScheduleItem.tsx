import React, {FC, useEffect} from "react";
import {useState} from "react";
import './ScheduleItem.scss'

interface ScheduleItemProps {
    value: any,
    activeItem?: boolean,
    onClick?: (value?: any) => void,
    activeHours?: any,
    selectHour?: any,
    deleteHour?: any
}

export const ScheduleItem: FC<ScheduleItemProps> = ({
                                                        value,
                                                        deleteHour,
                                                        activeItem,
                                                        onClick,
                                                        activeHours,
                                                        selectHour
                                                    }) => {
    const [active, setActive] = useState(activeItem);

    const activeHandler = () => {
        setActive(!active)


        !active ? selectHour(value) : deleteHour(value)
    }

    useEffect(() => {
        setActive(false)

    }, [])

    useEffect(() => {
        setActive(activeItem)
        activeHours === value && setActive(true)
    }, [activeItem, activeHours, value, active])


    return (
        <div className={`schedule-item ${active ? 'active' : ''}`} onClick={onClick || activeHandler}/>
    )
}