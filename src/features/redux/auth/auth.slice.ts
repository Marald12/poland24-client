import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@/features/redux/api/user/user.interface'
import {
	authLogin,
	authLogout,
	authRegister
} from '@/features/redux/auth/auth.api'

interface IInitialAuthState {
	accessToken: string
	user: IUser | null
	isLoading: boolean
}

const initialState: IInitialAuthState = {
	accessToken: '',
	user: null,
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
				state.user = null
				state.accessToken = ''
			})
			.addCase(authRegister.pending, state => {
				state.isLoading = true
			})
			.addCase(authRegister.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
				state.accessToken = payload.accessToken
			})
			.addCase(authRegister.rejected, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(authLogout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
	}
})
