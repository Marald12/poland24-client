'use client'
import React, { FC, useState } from 'react'
import styles from './RequestPage.module.scss'
import HeaderNav from '@/features/header-nav/HeaderNav'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import cn from 'classnames'
import basketImg from '@/assets/images/basket-request.png'
import Image from 'next/image'
import RequestItem from '@/widgets/request-page/item/RequestItem'
import Button from '@/shared/ui/buttons/button/Button'
import { mediaService } from '@/features/redux/api/media/media.service'
import { requestApi } from '@/features/redux/api/request/request.api'
import { toast } from 'react-toastify'

const RequestPage: FC = () => {
	const [create, { isSuccess }] = requestApi.useCreateRequestMutation()
	const [array, setArray] = useState([1])
	const [items, setItems] = useState<
		{
			url: string
			comment: string
			files: File[]
			count: number
		}[]
	>(array.map(count => ({ url: '', comment: '', files: [], count })))

	const clickHandler = async () => {
		items.map(async item => {
			if (item.files.length >= 1) {
				const media: string[] = []

				item.files.map(async file => {
					const formData = new FormData()
					formData.append('media', file)

					const req = await mediaService.upload(formData, 'request')
					media.push(req.data.url)
				})

				setTimeout(
					() =>
						create({
							url: item.url,
							comment: item.comment,
							media
						}),
					1000
				)
			} else {
				create({
					url: item.url,
					comment: item.comment
				})
			}

			if (isSuccess) toast.success('Вы успешно создали запрос')
		})
	}

	return (
		<div className={cn(styles.wrapper, 'container')}>
			<HeaderNav links={[{ title: 'Запрос', href: '/request' }]} />
			<div className={styles.container}>
				<div className={styles.column__info}>
					<SectionTitle
						className={styles.title}
						title='Можете оформить запрос и в кратчайшие сроки постараемся найти необходимы товар в странах Евросоюза.'
					/>
					<p>
						Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот,
						несмотря на название, не имеет никакого отношения к обитателям
						водоемов. Используется он веб-дизайнерами для вставки на
						интернет-страницы и демонстрации внешнего вида контента, просмотра
						шрифтов, абзацев, отступов и т.д.
					</p>
				</div>
				<div className={styles.column__img}>
					<Image src={basketImg} alt='basket img' />
				</div>
			</div>
			<div className={styles.items}>
				{array.map(item => (
					<RequestItem
						count={item}
						setArray={setArray}
						key={item}
						setItems={setItems}
					/>
				))}
			</div>
			<div className={styles.button}>
				<Button onClick={clickHandler}>Отправить</Button>
			</div>
		</div>
	)
}

export default RequestPage
