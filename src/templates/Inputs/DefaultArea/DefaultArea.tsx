import React, {FC} from "react";
import './DefaultArea.scss'


interface DefaultAreaProps {
    title: string,
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void

}

export const DefaultArea:FC<DefaultAreaProps> = ({title, value, onChange}) => {
    return (
        <div className={'default-area'}>
            <p className={'default-area__title'}>{title}</p>
            <textarea className={'default-area__input'} value={value} onChange={onChange} />
        </div>
    )
}