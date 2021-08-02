import React, {FC, useEffect} from "react";
import {useState} from "react";
import './ScheduleMainItem.scss'
import {useDispatch} from "react-redux";
import {createActiveHour, removeActiveHour} from "../../../store/slicers/mainSlice";

interface ScheduleItemProps {
    value?: any,
    activeItem?: boolean,
    onClick?: any,
    activeHours?: any,
    selectHour?: any,
    deleteHour?: any,
    currentDay?: {}
}

export const ScheduleMainItem: FC<ScheduleItemProps> = ({
                                                        value,
                                                        activeItem,
                                                        onClick,
                                                    }) => {

    const [active, setActive] = useState<boolean | undefined>(activeItem);

    const dispatch = useDispatch()


    const activeHandler = () => {
        setActive(!active)
        onClick()
    }

    useEffect(() => {
        (value && active) ? dispatch(createActiveHour(value)) : (value && !active) && dispatch(removeActiveHour(value))
    }, [active, value, dispatch]);


    return (
        <div className={`schedule-item ${active ? 'active' : ''}`} onClick={onClick && activeHandler}/>
    )
}