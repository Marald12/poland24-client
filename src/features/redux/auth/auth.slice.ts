import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/features/redux/api/user/user.interface'
import { authLogin } from '@/features/redux/auth/auth.api'

interface IInitialAuthState {
	accessToken: string
	user: IUser | {}
	isLoading: boolean
}

const initialState: IInitialAuthState = {
	accessToken: '',
	user: {},
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(authLogin.pending, state => {
				state.isLoading = true
			})
			.addCase(authLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.accessToken = payload.accessToken
			})
			.addCase(authLogin.rejected, state => {
				state.isLoading = false
				state.user = {}
				state.accessToken = ''
			})
	}
})
