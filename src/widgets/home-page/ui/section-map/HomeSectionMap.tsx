import { FC } from 'react'
import styles from './HomeSectionMap.module.scss'
import cn from 'classnames'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'

const HomeSectionMap: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<SectionTitle title='Мы доставлям из' />
		</section>
	)
}

export default HomeSectionMap
