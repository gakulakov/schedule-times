import React, {FC, ReactChild} from "react";
import './Modal.scss'

interface ModalProps {
    title: string,
    closeHandler: () => void,
    saveHandler: () => void,
    children: ReactChild
}

export const Modal: FC<ModalProps> = ({title, children, closeHandler, saveHandler}) => {
    return (
        <div className={'modal-container'}>
            <div className={'modal'}>
                <div className={'modal__header'}>
                    <p className={'modal__title'}>{title}</p>
                    <i onClick={closeHandler} className="bi bi-x-lg modal__cross"/>
                </div>
                {children}
                <div className={'modal__footer'}>
                    <div className={'modal__save-btn'} onClick={saveHandler}>
                        <p>Сохранить</p>
                    </div>
                </div>
            </div>
        </div>
    )
}