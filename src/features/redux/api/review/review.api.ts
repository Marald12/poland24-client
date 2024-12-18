import { baseApi } from '@/features/redux/api/base.api'
import {
	IReview,
	IReviewDto
} from '@/features/redux/api/review/review.interface'

export const reviewApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAllReviews: build.query<IReview[], string>({
			query: shop => ({
				url: '/reviews',
				params: { shop }
			}),
			providesTags: ['review']
		}),
		getOneReview: build.query<IReview, string>({
			query: id => `/reviews/${id}`,
			providesTags: (result, error, arg) => [{ type: 'review', id: arg }]
		}),
		createReview: build.mutation<IReview, IReviewDto>({
			query: body => ({
				url: '/reviews',
				method: 'POST',
				body
			}),
			invalidatesTags: ['review', 'user']
		})
	})
})
