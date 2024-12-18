'use client'
import React, { FC } from 'react'
import SingleShopHeader from '@/widgets/single-shop-page/provider/ui/header/SingleShopHeader'
import { useParams } from 'next/navigation'
import { shopApi } from '@/features/redux/api/shop/shop.api'
import SingleShopContext from '@/shared/contexts/single-shop.context'
import SingleShopContent from '@/widgets/single-shop-page/provider/ui/content/SingleShopContent'
import SingleShopFooter from '@/widgets/single-shop-page/provider/ui/footer/SingleShopFooter'

const SingleShopProvider: FC = () => {
	const { id } = useParams()
	const { data } = shopApi.useGetOneShopQuery(id as string)

	return (
		<SingleShopContext.Provider value={{ shop: data }}>
			<SingleShopHeader />
			<SingleShopContent />
			<SingleShopFooter />
		</SingleShopContext.Provider>
	)
}

export default SingleShopProvider
