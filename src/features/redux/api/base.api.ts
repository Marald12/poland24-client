import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '@/shared/utils/baseUrl'
import { RootState } from '@/features/redux/store'

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.accessToken

			if (token) headers.set('Authorization', `Bearer ${token}`)

			return headers
		}
	}),
	reducerPath: 'api',
	endpoints: build => ({
		getProfile: build.query({
			query: () => '/get-profile'
		})
	}),
	tagTypes: [
		'order',
		'shop',
		'user',
		'request',
		'review',
		'category',
		'country'
	]
})
