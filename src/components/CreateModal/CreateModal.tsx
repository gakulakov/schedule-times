import React, {FC, useEffect, useState} from "react";
import './CreateModal.scss'
import {DefaultInput} from "../../templates/Inputs/DefaultInput/DefaultInput";
import {DefaultArea} from "../../templates/Inputs/DefaultArea/DefaultArea";
import {Modal} from "../../templates/Modals/Modal/Modal";
import {IMaster} from "../../types/types";
import {v4 as uuidv4} from "uuid";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/rootReducer";
import {createMaster} from "../../store/slicers/mainSlice";


interface CreateModalProps {
    masterData?: IMaster,
    closeHandler: (value: boolean) => void,
    visible: boolean
}

export const CreateModal: FC<CreateModalProps> = ({masterData, closeHandler, visible}) => {
    const [master, setMaster] = useState<IMaster>(masterData || {
        name: '',
        phoneNumber: '',
        sphere: '',
        description: '',
        id: uuidv4()
    });

    const dispatch = useDispatch<AppDispatch>()

    const changeHandler = (setter: string, value: string) => {
        setMaster(prevState => ({
            ...prevState,
            [setter]: value
        }))
    }

    const saveHandler = (masterObj: IMaster) => {
        dispatch(createMaster(masterObj))
        closeHandler(true)
    }

    useEffect(() => {
        setMaster(masterData || {name: '', phoneNumber: '', sphere: '', description: '', id: uuidv4()})
    }, [visible, masterData])

    console.log(master)

    return (
        <Modal title={'Добавление мастера'} closeHandler={() => closeHandler(true)}
               saveHandler={() => saveHandler(master)}>
            <div className={'master-creator__main-block'}>
                <DefaultInput value={master.name}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler('name', e.target.value)}
                              title={"Имя"}/>
                <DefaultInput value={master.phoneNumber}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler('phoneNumber', e.target.value)}
                              title={"Номер телефона"} type={'number'}/>
                <DefaultInput value={master.sphere}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler('sphere', e.target.value)}
                              title={"Профессия"}/>
                <DefaultArea value={master.description}
                             onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeHandler('description', e.target.value)}
                             title={'О мастере'}/>
            </div>
        </Modal>
    )
}