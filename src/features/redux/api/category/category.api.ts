import { baseApi } from '@/features/redux/api/base.api'
import { ICategory } from '@/features/redux/api/category/category.interface'

export const categoryApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<ICategory[], null>({
			query: () => '/categories',
			providesTags: ['category']
		}),
		getOne: build.query<ICategory, string>({
			query: id => `/categories/${id}`,
			providesTags: (result, error, arg) => [{ type: 'category', id: arg }]
		})
	})
})
