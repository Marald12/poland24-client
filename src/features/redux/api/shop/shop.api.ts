import { baseApi } from '@/features/redux/api/base.api'
import { IShop } from '@/features/redux/api/shop/shop.interface'

export const shopApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAllShops: build.query<IShop[], null>({
			query: () => '/shops'
		})
	})
})
