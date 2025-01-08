'use client'
import { userApi } from '@/features/redux/api/user/user.api'

export const usePagination = () => {
	const { data: allData } = userApi.useGetProfileQuery(null)
	if (allData) {
		const pages = Math.ceil(allData.orders.length / 5)
		const pagination: number[] = Array.from({ length: pages }, (_, i) => i + 1)

		return {
			pages,
			pagination
		}
	}
}
