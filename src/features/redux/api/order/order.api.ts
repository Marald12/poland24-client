import { baseApi } from '@/features/redux/api/base.api'
import {
	IOrder,
	IOrderDto,
	IOrderDtoForAuth
} from '@/features/redux/api/order/order.interface'

export const orderApi = baseApi.injectEndpoints({
	endpoints: build => ({
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
			invalidatesTags: [{ type: 'order' }]
		})
	})
})
