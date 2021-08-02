import {createSlice} from "@reduxjs/toolkit";
import {IMaster} from "../../types/types";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        masters: [{
            name: 'Катерина',
            phoneNumber: 9036232697,
            sphere: 'Мастер маникюра',
            description: 'Профессионал своего дела',
            id: 'erqdfasdf21341sdadv'
        }]
    },
    reducers: {
        createMaster(state: any, action) {
            state.masters = [...state.masters.filter((i: IMaster) => i.id !== action.payload.id), action.payload]
        }
    }
})

export default mainSlice.reducer;

export const {
    createMaster
} = mainSlice.actions