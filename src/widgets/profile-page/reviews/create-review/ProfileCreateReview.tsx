'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './ProfileCreateReview.module.scss'
import Select from 'react-select'
import { shopApi } from '@/features/redux/api/shop/shop.api'
import { useForm } from 'react-hook-form'
import { IReviewDto } from '@/features/redux/api/review/review.interface'
import TextArea from '@/shared/ui/textarea/TextArea'
import Button from '@/shared/ui/buttons/button/Button'
import { reviewApi } from '@/features/redux/api/review/review.api'
import Image from 'next/image'
import starNoSolidImg from '@/assets/images/star_no_solid.svg'
import starSolidImg from '@/assets/images/star_solid.svg'
import { toast } from 'react-toastify'
import UploadFile from '@/shared/ui/buttons/upload-file/UploadFile'
import { mediaService } from '@/features/redux/api/media/media.service'

const ProfileCreateReview: FC = () => {
	const [customShopId, setShopId] = useState('')
	const { data } = shopApi.useGetAllShopsQuery(null)
	const [createReview, { isSuccess }] = reviewApi.useCreateReviewMutation()
	const { register, handleSubmit, formState } = useForm<IReviewDto>()
	const starsArray: number[] = Array.from({ length: 5 }, (_, i) => i + 1)
	const [stars, setStars] = useState(0)
	const [isClick, setIsClick] = useState(false)
	const [files, setFiles] = useState<FileList | null>(null)
	const [images, setImages] = useState<string[]>([])

	useEffect(() => {
		if (isSuccess) toast.success('Вы успешно создали отзыв')
	}, [isSuccess])

	const submitHandler = async ({ ...data }: IReviewDto) => {
		if (stars == 0) return toast.error('Выберите количество звезд')
		if (customShopId == '') return toast.error('Выберите магазин')
		if (files) {
			if ([...files].length > 4)
				return toast.error('Максимум можно прикрепить 4 фото')
			;[...files].map(async file => {
				const formData = new FormData()
				formData.append('media', file)

				const dataa = await mediaService.upload(formData, 'review')
				if (dataa.data) {
					setImages(prevState => [...prevState, dataa.data.url])
				}
			})
			if (images.length >= 1) {
				await createReview({
					message: data.message,
					shopId: customShopId,
					starCount: stars,
					media: images
				})
			}
		} else {
			await createReview({
				message: data.message,
				shopId: customShopId,
				starCount: stars
			})
		}
	}

	return (
		<div className={styles.wrapper}>
			<h4>Оставить отзыв</h4>
			<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
				<TextArea
					className={styles.textarea}
					placeholder='Ваш отзыв'
					error={formState.errors.message?.message}
					{...register('message', {
						required: {
							value: true,
							message: 'Поле пустое'
						}
					})}
				/>
				<Select
					options={data?.map(item => ({
						value: item._id,
						label: item.title
					}))}
					placeholder='Выберите магазин'
					className={styles.select}
					onChange={e => e && setShopId(e.value)}
				/>
				<div className={styles.stars}>
					<span>
						Ваша оценка: <span>*</span>
					</span>
					<div className={styles.stars__container}>
						{starsArray.map(count => (
							<span
								key={count}
								onMouseEnter={() => {
									setStars(count)
									setIsClick(false)
								}}
								onMouseLeave={() => !isClick && setStars(0)}
								onClick={() => setIsClick(true)}
							>
								<Image
									src={count <= stars ? starSolidImg : starNoSolidImg}
									width={26.67}
									height={25.33}
									alt='star no solid'
									className={styles.star}
								/>
							</span>
						))}
					</div>
				</div>
				<UploadFile
					accept='image/png, image/jpeg'
					multiple
					onChange={event => setFiles(event.target.files)}
				/>
				<Button>ОТПРАВИТЬ</Button>
			</form>
		</div>
	)
}

export default ProfileCreateReview
