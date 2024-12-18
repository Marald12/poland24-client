import React, { FC } from 'react'
import styles from './QuestionsHeader.module.scss'
import HeaderNav from '@/features/header-nav/HeaderNav'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import cn from 'classnames'

const QuestionsHeader: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<HeaderNav links={[{ title: 'Вопрос-ответ', href: '/questions' }]} />
			<SectionTitle title='Вопрос-ответ' className={styles.title} />
		</section>
	)
}

export default QuestionsHeader
