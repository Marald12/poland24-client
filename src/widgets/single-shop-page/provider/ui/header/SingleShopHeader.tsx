import React, { FC, useContext } from 'react'
import styles from './SingleShopHeader.module.scss'
import cn from 'classnames'
import HeaderNav from '@/features/header-nav/HeaderNav'
import SingleShopContext from '@/shared/contexts/single-shop.context'

const SingleShopHeader: FC = () => {
	const { shop } = useContext(SingleShopContext)

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<HeaderNav
				links={[
					{ title: 'Каталог магазинов', href: '/shop' },
					{ title: shop?.title || 'Закгрузка...', href: `/shop/${shop?._id}` }
				]}
			/>
		</div>
	)
}

export default SingleShopHeader
