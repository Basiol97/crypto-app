import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
    showSearchBar: boolean; 
}

const initialState:InitialState = {
    showSearchBar: false,
}

export const mobileSearchBar = createSlice({
    name: 'mobileSearchBar',
    initialState,
    reducers: {
        handleMobileSearchClick: (state) => {
            state.showSearchBar = !state.showSearchBar;
        }
    },
})

export const { handleMobileSearchClick } = mobileSearchBar.actions
export default mobileSearchBar.reducer

