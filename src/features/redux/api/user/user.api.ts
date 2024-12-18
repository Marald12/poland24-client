import { baseApi } from '@/features/redux/api/base.api'
import { IUser, IUserDto } from '@/features/redux/api/user/user.interface'

export const userApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAllUsers: build.query<IUser[], null>({
			query: () => 'users',
			providesTags: ['user']
		}),
		getOneUser: build.query<IUser, string>({
			query: id => `users/${id}`,
			providesTags: result =>
				result ? [{ type: 'user', id: result._id }, 'user'] : ['user']
		}),
		getProfile: build.query<IUser, null>({
			query: () => ({
				url: '/users/get-profile',
				cache: 'no-cache'
			}),
			providesTags: result =>
				result ? [{ type: 'user', id: result._id }, 'user'] : ['user']
		}),
		updateUser: build.mutation<IUser, IUserDto>({
			query: data => ({
				url: `users`,
				method: 'PATCH',
				body: data
			}),
			invalidatesTags: result =>
				result ? [{ type: 'user', id: result._id }, 'user'] : ['user']
		})
	})
})
