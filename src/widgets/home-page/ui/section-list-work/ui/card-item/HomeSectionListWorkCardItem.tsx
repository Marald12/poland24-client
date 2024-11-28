import { FC } from 'react'
import styles from './HomeSectionListWorkCardItem.module.scss'
import { IWorkCard } from '@/widgets/home-page/ui/section-list-work/ui/card-list/card.array'

interface props extends IWorkCard {
	index: number
}

const HomeSectionListWorkCardItem: FC<props> = ({
	title,
	index,
	description
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1>0{index}</h1>
				<h4>{title}</h4>
			</div>
			<div className={styles.content}>
				<span>{description}</span>
			</div>
		</div>
	)
}

export default HomeSectionListWorkCardItem
