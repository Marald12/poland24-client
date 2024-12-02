import { baseApi } from '@/features/redux/api/base.api'
import {
	IReview,
	IReviewDto
} from '@/features/redux/api/review/review.interface'

export const reviewApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<IReview[], null>({
			query: () => '/reviews',
			providesTags: ['review']
		}),
		getOne: build.query<IReview, string>({
			query: id => `/reviews/${id}`,
			providesTags: (result, error, arg) => [{ type: 'review', id: arg }]
		}),
		create: build.mutation<IReview, IReviewDto>({
			query: body => ({
				url: '/reviews',
				method: 'POST',
				body
			}),
			invalidatesTags: ['review', 'user']
		})
	})
})
