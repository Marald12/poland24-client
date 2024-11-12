import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosMain } from '@/shared/utils/axios'
import { IUser } from '@/features/redux/api/user/user.interface'
import { toastr } from 'react-redux-toastr'

interface IAuthDto {
	email: string
	password: string
}

interface IAuth {
	accessToken: string
	user: IUser
}

export const authLogin = createAsyncThunk<IAuth, IAuthDto>(
	'auth/login',
	async (body: IAuthDto, { rejectWithValue }) => {
		try {
			const response = await axiosMain().post('/auth/login', body)

			return response.data
		} catch (e: any) {
			const message = e.response.data.message
			toastr.error('Авторизация', message)
			return rejectWithValue(message)
		}
	}
)
