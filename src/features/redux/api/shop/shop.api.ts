import { baseApi } from '@/features/redux/api/base.api'
import { IShop, IShopFilters } from '@/features/redux/api/shop/shop.interface'

export const shopApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAllShops: build.query<IShop[], null>({
			query: () => '/shops',
			providesTags: ['shop']
		}),
		getFilterShops: build.query<IShop[], IShopFilters>({
			query: body => ({
				url: '/shops/filters',
				params: body
			})
		}),
		getOneShop: build.query<IShop, string>({
			query: id => `/shops/${id}`,
			providesTags: (result, error, arg) => [{ type: 'shop', id: arg }]
		})
	})
})
