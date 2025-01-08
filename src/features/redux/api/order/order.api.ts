import { baseApi } from '@/features/redux/api/base.api'
import {
	IOrder,
	IOrderDto,
	IOrderDtoForAuth
} from '@/features/redux/api/order/order.interface'

export const orderApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<IOrder[], null>({
			query: () => '/orders',
			providesTags: ['order']
		}),
		getOne: build.query<IOrder, string>({
			query: id => `/orders/${id}`,
			providesTags: (result, error, arg) => [{ type: 'order', id: arg }]
		}),
		getInPagination: build.query<IOrder[], { skip: number; limit: number }>({
			query: body => ({
				url: `/orders/pagination`,
				params: body,
				cache: 'no-cache'
			}),
			providesTags: ['order', 'user']
		}),
		createOrderForNoAuth: build.mutation<IOrder, IOrderDto>({
			query: body => ({
				url: '/orders/for-no-auth',
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'order' }]
		}),
		createOrderForAuth: build.mutation<IOrder, IOrderDtoForAuth>({
			query: body => ({
				url: '/orders/for-auth',
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'order' }, 'user']
		})
	})
})
