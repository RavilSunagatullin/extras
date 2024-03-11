import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
		id: string;
		name: string;
		email: string;
		isAuth: boolean;
		accessToken: string | null;
}
const initialState: UserState = {
	id: '',
	name: '',
	email: '',
	accessToken: null,
	isAuth: false
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<UserState>) {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.accessToken = action.payload.accessToken;
			state.isAuth = true;
		},
		clearUser(state) {
			state.id = '';
			state.name = '';
			state.email = '';
			state.accessToken = null;
			state.isAuth = false;
		}
	}
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;