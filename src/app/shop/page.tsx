import { NextPage } from 'next'
import ShopHeader from '@/widgets/shop-page/ui/header/ShopHeader'
import ShopContent from '@/widgets/shop-page/ui/content/ShopContent'
import React from 'react'

const shopPage: NextPage = () => {
	return (
		<>
			<ShopHeader />
			<ShopContent />
		</>
	)
}

export default shopPage
