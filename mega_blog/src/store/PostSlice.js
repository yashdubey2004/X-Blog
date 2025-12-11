import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postData: null
}

const PostSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        create: (state, action) => {
            state.postData = action.payload;
        },
        clear: (state) => {
            state.postData = null;
        }
    }
});

export const {create, clear} = PostSlice.actions;
export default PostSlice.reducer;