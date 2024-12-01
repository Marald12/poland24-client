import { FC } from 'react'
import styles from './HomeSectionListWork.module.scss'
import cn from 'classnames'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import HomeSectionListWorkCardList from '@/widgets/home-page/ui/section-list-work/ui/card-list/HomeSectionListWorkCardList'
import PlaceOrderButton from '@/shared/ui/buttons/place-order/PlaceOrderButton'

const SectionListWork: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<SectionTitle title='Как это работает' />
			<HomeSectionListWorkCardList />
			<div className={styles.button}>
				<PlaceOrderButton />
			</div>
		</section>
	)
}

export default SectionListWork
