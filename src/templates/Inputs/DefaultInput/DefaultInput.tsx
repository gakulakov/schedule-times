import React, {FC} from "react";
import './DefaultInput.scss'

interface DefaultInputProps {
    title: string,
    type?: string,
    value?: string | number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DefaultInput: FC<DefaultInputProps> = ({title, type, value, onChange}) => {
    return (
        <div className={'default-input'}>
            <p className={'default-input__title'}>{title}</p>
            <input className={'default-input__input'} type={type} value={value} onChange={onChange} />
        </div>
    )
}