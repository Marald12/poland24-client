import React from 'react'
import styles from './ShopHeader.module.scss'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import HeaderNav from '@/features/header-nav/HeaderNav'
import cn from 'classnames'

const ShopHeader = () => {
	return (
		<div className={cn(styles.wrapper, 'container')}>
			<HeaderNav links={[{ title: 'Каталог магазинов', href: '/shop' }]} />
			<SectionTitle title='Каталог магазинов' />
		</div>
	)
}

export default ShopHeader
