import { IBase } from '@/features/redux/api/base.interface'

export interface IShop extends IBase {
	title: string
	description: string
	commissionPercentage: number
	deliveryDay: number
	logoPath: string
	bannerPath: string
	countries: any[]
	categories: any[]
}
