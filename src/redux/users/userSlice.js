import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: { users: [] },
    reducers: {
        addUser: (state, { payload }) => { state.users.push(payload) }
    },
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
