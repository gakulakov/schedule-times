import React, {FC} from "react";
import './Header.scss'

interface HeaderProps {
    title: string
}

export const Header: FC<HeaderProps> = ({title}) => {
    return (
        <div className={'header'}>
            <p className={'header__title'}>
                {title}
            </p>
        </div>
    )
}