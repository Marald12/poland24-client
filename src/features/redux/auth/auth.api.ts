import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosMain } from '@/shared/utils/axios'
import {
	IAuth,
	IAuthDto,
	IRegisterDto
} from '@/features/redux/auth/auth.interface'
import { toast } from 'react-toastify'
import { isAxiosError } from 'axios'

export const authLogin = createAsyncThunk<IAuth, IAuthDto>(
	'auth/login',
	async (body: IAuthDto, { rejectWithValue }) => {
		try {
			const response = await axiosMain().post('/auth/login', body)

			toast.success('Вы успешно вошли в аккаунт')

			return response.data
		} catch (e) {
			if (isAxiosError(e)) {
				const message = e.response?.data.message as string | string[]
				return rejectWithValue(message)
			} else {
				rejectWithValue('Error')
			}
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
		} catch (e) {
			if (isAxiosError(e)) {
				const message = e.response?.data.message as string | string[]
				return rejectWithValue(message)
			} else {
				rejectWithValue('Error')
			}
		}
	}
)

export const authLogout = createAsyncThunk('auth/logout', async () => {
	return toast.success('Вы успешно вышли из аккаунта')
})
