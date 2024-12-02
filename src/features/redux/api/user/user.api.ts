import { baseApi } from '@/features/redux/api/base.api'
import { IUser } from '@/features/redux/api/user/user.interface'

export const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<IUser[], null>({
			query: () => 'users',
			providesTags: ['user']
		}),
		getOne: build.query<IUser, string>({
			query: id => `users/${id}`,
			providesTags: (result, error, arg) => [{ type: 'user', id: arg }]
		})
	})
})
