import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    themeMode: false,
}

export const themeModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        ConvertMode: (state) => {
            state.themeMode =!state.themeMode;
        }
    },
})

export const { ConvertMode } = themeModeSlice.actions
export default themeModeSlice.reducer

