import React, { FC } from 'react'
import styles from './SingleShopFooter.module.scss'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import { WorksItemList } from '@/widgets/single-shop-page/provider/ui/footer/works-item.list'
import WorkItem from '@/widgets/single-shop-page/provider/ui/footer/item/WorkItem'
import SingleShopSlider from '@/widgets/single-shop-page/provider/ui/footer/slider/SingleShopSlider'

const SingleShopFooter: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<SectionTitle
					title='Как это работает'
					description='Инструкция доставки из Германии'
				/>
				<div className={styles.list}>
					{WorksItemList.map((item, index) => (
						<WorkItem item={item} id={index + 1} key={index} />
					))}
				</div>
			</div>
			<SingleShopSlider />
		</div>
	)
}

export default SingleShopFooter
