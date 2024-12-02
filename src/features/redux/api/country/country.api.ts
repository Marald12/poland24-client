import { baseApi } from '@/features/redux/api/base.api'
import { ICountry } from '@/features/redux/api/country/country.interface'

export const countryApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getAll: build.query<ICountry[], null>({
			query: () => '/countries',
			providesTags: ['country']
		}),
		getOne: build.query<ICountry, string>({
			query: id => `/countries/${id}`,
			providesTags: (result, error, arg) => [{ type: 'country', id: arg }]
		})
	})
})
