import { FC } from 'react'
import styles from './SectionShopsItem.module.scss'
import { ISectionShopsItemProps } from '@/widgets/home-page/ui/section-shops/ui/item/section-shops-item.interface'
import Image from 'next/image'
import arrowDownRightImage from '@/assets/images/arrow-down-right.svg'
import Link from 'next/link'

const SectionShopsItem: FC<ISectionShopsItemProps> = ({ shop }) => {
	return (
		<div className={styles.wrapper}>
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
			<p>{shop.description}</p>
			<div className={styles.container__blocks}>
				<div className={styles.block}>
					<span className={styles.block__title}>Сроки доставки:</span>
					<span className={styles.block__title_mobile}>Доставка:</span>
					<h4>до {shop.deliveryDay} дней</h4>
				</div>
				<div className={styles.block}>
					<span className={styles.block__title}>Комиссия на доставку:</span>
					<span className={styles.block__title_mobile}>Комиссия:</span>
					<h4>{shop.commissionPercentage}%</h4>
				</div>
			</div>
			<Link href={`/shop/${shop._id}`} className={styles.arrow__down_right}>
				<Image src={arrowDownRightImage} alt={arrowDownRightImage} />
			</Link>
		</div>
	)
}

export default SectionShopsItem
