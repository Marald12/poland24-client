import { IBase } from '@/features/redux/api/base.interface'
import { ICategory } from '@/features/redux/api/category/category.interface'
import { ICountry } from '@/features/redux/api/country/country.interface'

export interface IShop extends IBase {
	title: string
	description: string
	commissionPercentage: number
	deliveryDay: number
	logoPath: string
	bannerPath: string
	countries: ICountry[]
	categories: ICategory[]
}

export interface IShopFilters {
	countries?: string[]
	categories?: string[]
}
