import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosMain } from '@/shared/utils/axios'
import {
	IAuth,
	IAuthDto,
	IRegisterDto
} from '@/features/redux/auth/auth.interface'
import { toast } from 'react-toastify'

export const authLogin = createAsyncThunk<IAuth, IAuthDto>(
	'auth/login',
	async (body: IAuthDto, { rejectWithValue }) => {
		try {
			const response = await axiosMain().post('/auth/login', body)

			toast.success('Вы успешно вошли в аккаунт')

			return response.data
		} catch (e: any) {
			const message = e.response.data.message
			toast.error(message)
			return rejectWithValue(message)
		}
	}
)

export const authRegister = createAsyncThunk<IAuth, IRegisterDto>(
	'auth/register',
	async (body: IRegisterDto, { rejectWithValue }) => {
		try {
			const response = await axiosMain().post('/auth/register', body)

			toast.success('Вы успешно создали аккаунт')

			return response.data
		} catch (e: any) {
			const message = e.response.data.message
			message.map((item: string) => toast.error(item))
			return rejectWithValue(message)
		}
	}
)

export const authLogout = createAsyncThunk('auth/logout', async () => {
	return toast.success('Вы успешно вышли из аккаунта')
})
