import { baseApi } from '@/features/redux/api/base.api'
import {
	IRequest,
	IRequestDto
} from '@/features/redux/api/request/request.interface'

export const requestApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<IRequest[], null>({
			query: () => '/requests',
			providesTags: ['request']
		}),
		getOne: build.query<IRequest, string>({
			query: id => `/requests/${id}`,
			providesTags: (result, error, arg) => [{ type: 'request', id: arg }]
		}),
		create: build.mutation<IRequest, IRequestDto>({
			query: body => ({
				url: '/requests',
				method: 'POST',
				body
			}),
			invalidatesTags: ['request']
		})
	})
})
