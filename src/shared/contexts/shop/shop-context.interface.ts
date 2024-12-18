import { Dispatch, SetStateAction } from 'react'

export type countryAndCategory = {
	id: string
	name: string
}

export interface IShopContext {
	countries: countryAndCategory[]
	categories: countryAndCategory[]
	setCountries: Dispatch<SetStateAction<countryAndCategory[]>>
	setCategories: Dispatch<SetStateAction<countryAndCategory[]>>
}
