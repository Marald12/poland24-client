import { FC } from 'react'
import styles from './HomeSectionListWorkCardList.module.scss'
import { HomeSectionListWorkCards } from '@/widgets/home-page/ui/section-list-work/ui/card-list/card.array'
import HomeSectionListWorkCardItem from '@/widgets/home-page/ui/section-list-work/ui/card-item/HomeSectionListWorkCardItem'

const HomeSectionListWorkCardList: FC = () => {
	return (
		<ul className={styles.wrapper}>
			{HomeSectionListWorkCards.map((item, id) => (
				<li key={item.title}>
					<HomeSectionListWorkCardItem
						title={item.title}
						description={item.description}
						index={id + 1}
					/>
				</li>
			))}
		</ul>
	)
}

export default HomeSectionListWorkCardList
