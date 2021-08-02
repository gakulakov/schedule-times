import React, {FC} from "react";
import './EditButton.scss'


interface EditButtonProps {
    title: string,
    icon?: string,
    onClick?: () => void
}

export const EditButton: FC<EditButtonProps> = ({title, icon, onClick}) => {
    return (
        <div className={'edit-button'} onClick={onClick}>
            <i className={icon} />
            <p className={'edit-button__title'}>{title}</p>
        </div>
    )
}