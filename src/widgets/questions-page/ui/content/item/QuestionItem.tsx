'use client'
import React, { FC, useRef, useState } from 'react'
import styles from './QuestionItem.module.scss'
import { IQuestionItemProps } from '@/widgets/questions-page/ui/content/item/question-item.interface'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const QuestionItem: FC<IQuestionItemProps> = ({ title, description }) => {
	const [isShow, setIsShow] = useState(false)
	const ref = useRef<HTMLParagraphElement>(null)

	const clickHandler = () => {
		setIsShow(prevState => {
			if (!prevState && ref.current) {
				ref.current.style.display = 'block'
				setTimeout(() => ref.current!.classList.add(styles.active), 1)
			}
			if (prevState && ref.current) {
				ref.current.classList.remove(styles.active)
				setTimeout(() => (ref.current!.style.display = 'none'), 200)
			}

			return !prevState
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.title} onClick={clickHandler}>
				<h3>{title}</h3>
				<span>{isShow ? <FaMinus /> : <FaPlus />}</span>
			</div>
			<div className={styles.description}>
				<p ref={ref}>{description}</p>
			</div>
		</div>
	)
}

export default QuestionItem
