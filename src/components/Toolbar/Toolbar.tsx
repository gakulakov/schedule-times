import React, {FC} from "react";
import './Toolbar.scss'


interface ToolbarProps {
    hidden?: boolean
}

export const Toolbar: FC<ToolbarProps> = ({hidden}) => {
    const mockMenuItems = [
        {title: "Мастера", id: 1, icon: 'bi bi-people-fill'},
        {title: "Администраторы", id: 2, icon: 'bi bi-person-badge'},
        {title: "Услуги", id: 3, icon: 'bi bi-shop'},
        {title: "Аналитика", id: 4, icon: 'bi bi-pie-chart-fill'},
        {title: "Клиенты", id: 5, icon: 'bi bi-person-badge-fill'},
        {title: "Настройки", id: 6, icon: 'bi bi-gear-fill'},
        {title: "Выход", id: 7, icon: 'bi bi-box-arrow-right'},
    ]

    const listGenerate = () => mockMenuItems.map(i => <li className={'toolbar-list__item'} key={i.id}><i
        className={i.icon}/><p className={'toolbar-list__title'}>{i.title}</p></li>)

    return (
        <div className={'toolbar-container'}>
            <ul className={'toolbar-list'}>
                {listGenerate()}
            </ul>
        </div>
    )
}