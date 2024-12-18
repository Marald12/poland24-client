import React, { FC } from 'react'
import styles from './QuestionsContent.module.scss'
import cn from 'classnames'
import { questionsList } from '@/widgets/questions-page/ui/content/questions.list'
import QuestionItem from '@/widgets/questions-page/ui/content/item/QuestionItem'

const QuestionsContent: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			{questionsList.map(item => (
				<QuestionItem
					key={item.title}
					title={item.title}
					description={item.description}
				/>
			))}
		</section>
	)
}

export default QuestionsContent
