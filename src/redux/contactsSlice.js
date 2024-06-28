import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: []
    },
    reducers: {
        add: {
            reducer: (state, action) => {
                state.items = [...state.items, action.payload]
            },
            prepare: (value)=>{
                return{payload:{
                    id:nanoid(),
                    ...value
                }}
            }
        },

        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    }
})

export const {add , remove} = contactsSlice.actions;

export default contactsSlice.reducer