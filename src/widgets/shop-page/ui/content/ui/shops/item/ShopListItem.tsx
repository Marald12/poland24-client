import React, { FC } from 'react'
import styles from './ShopListItem.module.scss'
import { IShop } from '@/features/redux/api/shop/shop.interface'
import Image from 'next/image'
import Link from 'next/link'

const ShopListItem: FC<{ shop: IShop }> = ({ shop }) => {
	return (
		<Link href={`shop/${shop._id}`} className={styles.item}>
			<div className={styles.logo}>
				<div className={styles.logo__spot} />
				<Image
					src={shop.logoPath}
					alt={shop.logoPath}
					width={123}
					height={34.54}
				/>
			</div>
			<h3>{shop.title}</h3>
			<div className={styles.container__blocks}>
				<div className={styles.block}>
					<span className={styles.block__title}>Доставка:</span>
					<h4>до {shop.deliveryDay} дней</h4>
				</div>
				<div className={styles.block}>
					<span className={styles.block__title}>Комиссия:</span>
					<h4>{shop.commissionPercentage}%</h4>
				</div>
			</div>
		</Link>
	)
}

export default ShopListItem
