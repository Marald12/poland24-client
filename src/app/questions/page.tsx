import React from 'react'
import { NextPage } from 'next'
import QuestionsHeader from '@/widgets/questions-page/ui/header/QuestionsHeader'
import QuestionsContent from '@/widgets/questions-page/ui/content/QuestionsContent'

const QuestionsPage: NextPage = () => {
	return (
		<>
			<QuestionsHeader />
			<QuestionsContent />
		</>
	)
}

export default QuestionsPage
