import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export  interface favoriteListModel {
    favoriteList: any;
    favCounter: number;
}
const initialState :  favoriteListModel =
    {
        favoriteList: [],
        favCounter: 0,
    };

const favoriteSlice = createSlice({
    name: 'favoriteList',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<any>) => {
            state.favoriteList.push(action.payload);
            state.favCounter++;
        },
        removeFavorite: (state, action: PayloadAction<any>) => {
            state.favoriteList = state.favoriteList.filter((item: any) => item.id !== action.payload.id);
            state.favCounter--;
        },
    },
});
export const {
    addFavorite,
    removeFavorite,
  } = favoriteSlice.actions;
export default favoriteSlice.reducer;