import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '@/shared/utils/baseUrl'

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl }),
	reducerPath: 'api',
	endpoints: build => ({})
})
