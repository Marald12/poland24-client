'use client'
import React, { FC, useState } from 'react'
import styles from './ShopContent.module.scss'
import ShopSidebar from '@/widgets/shop-page/ui/content/ui/sidebar/ShopSidebar'
import ShopList from '@/widgets/shop-page/ui/content/ui/shops/ShopList'
import cn from 'classnames'
import ShopContext from '@/shared/contexts/shop/shop.context'
import { countryAndCategory } from '@/shared/contexts/shop/shop-context.interface'
import ButtonNoBackground from '@/shared/ui/buttons/no-background/ButtonNoBackground'

const ShopContent: FC = () => {
	const [countries, setCountries] = useState<countryAndCategory[]>([])
	const [categories, setCategories] = useState<countryAndCategory[]>([])

	return (
		<ShopContext.Provider
			value={{ countries, categories, setCountries, setCategories }}
		>
			<div className={cn(styles.wrapper, 'container')}>
				<ShopSidebar />
				<ShopList />
			</div>
			<div className={styles.button}>
				<ButtonNoBackground>Показать еще</ButtonNoBackground>
			</div>
			<div className={cn(styles.description, 'container')}>
				<p>
					Компания Poland24 осуществляет доставку из любого
					магазина/поставщика/производителя стран Евросоюза, которые
					осуществляют доставку товара курьером в Польшу.
					<br />
					<br />
					Компания Poland24 осуществляет доставку из любого
					магазина/поставщика/производителя стран Евросоюза, которые
					осуществляют доставку товара курьером в Польшу. Компания Poland24
					осуществляет доставку из любого магазина/поставщика/производителя
					стран Евросоюза, которые осуществляют доставку товара курьером в
					Польшу.
				</p>
				<p>
					Компания Poland24 осуществляет доставку из любого
					магазина/поставщика/производителя стран Евросоюза, которые
					осуществляют доставку товара курьером в Польшу.
					<br />
					<br />
					Компания Poland24 осуществляет доставку из любого
					магазина/поставщика/производителя стран Евросоюза, которые
					осуществляют доставку товара курьером в Польшу.
				</p>
			</div>
		</ShopContext.Provider>
	)
}

export default ShopContent
