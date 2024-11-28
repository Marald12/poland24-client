'use client'
import { FC, useEffect, useState } from 'react'
import styles from './CreateOrderForm.module.scss'
import {
	ICreateOrderFormNoAuth,
	ICreateOrderFormProps
} from '@/shared/ui/forms/create-order/create-order-form.interface'
import Input from '@/shared/ui/input/Input'
import { useForm } from 'react-hook-form'
import { regexUrl } from '@/shared/utils/regexUrl'
import CheckBoxRed from '@/shared/ui/checkboxs/checkbox-red/CheckBoxRed'
import TextArea from '@/shared/ui/textarea/TextArea'
import CheckBox from '@/shared/ui/checkboxs/checkbox/CheckBox'
import Button from '@/shared/ui/buttons/button/Button'
import Select from 'react-select'
import { shopApi } from '@/features/redux/api/shop/shop.api'
import { orderApi } from '@/features/redux/api/order/order.api'
import { IOrderDto } from '@/features/redux/api/order/order.interface'
import CreateOrderFormList from '@/shared/ui/forms/create-order/list/CreateOrderFormList'
import CreateOrderFormSum from '@/shared/ui/forms/create-order/sum/CreateOrderFormSum'
import { toast } from 'react-toastify'

const CreateOrderForm: FC<ICreateOrderFormProps> = ({ url, setIsShow }) => {
	const { register, formState, handleSubmit, watch, setValue, reset } =
		useForm<ICreateOrderFormNoAuth>({
			defaultValues: {
				count: 1
			},
			mode: 'onChange'
		})
	const [feedbackType, setFeedbackType] = useState('email')
	const [isCheckedPolicy, setIsCheckedPolicy] = useState(false)
	const [shopId, setShopId] = useState('')
	const { data, isLoading } = shopApi.useGetAllShopsQuery(null)
	const [mutate, { isSuccess }] = orderApi.useCreateOrderForNoAuthMutation()

	useEffect(() => setValue('url', url), [url])

	useEffect(() => {
		if (isSuccess) {
			toast.success('Заказ успешно создан')
			reset()
			setIsShow(false)
		}
	}, [isSuccess])

	const submitHandler = async ({
		count,
		price,
		deliveryPrice,
		...resultForm
	}: ICreateOrderFormNoAuth) => {
		if (shopId == '') return toast.error('Магазин не выбран')
		await mutate({
			...resultForm,
			count: Number(count),
			price: Number(price),
			deliveryPrice: Number(deliveryPrice),
			shopId,
			socialType: feedbackType
		} as IOrderDto)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
			<div className={styles.form__order}>
				<h5>Заказ</h5>
				<div className={styles.column__product_one}>
					<div className={styles.product__one_url}>
						<label htmlFor='url'>Товар</label>
						<Input
							{...register('url', {
								required: {
									value: true,
									message: 'Поле пустое'
								},
								pattern: {
									value: regexUrl,
									message: 'Ссылка не валидна'
								}
							})}
							id='url'
							error={formState.errors.url?.message}
							placeholder='Вставте ссылку на товар'
						/>
					</div>
					<div className={styles.product__one_count}>
						<label htmlFor='count'>К-во</label>
						<Input
							{...register('count')}
							id='count'
							error={formState.errors.count?.message}
							type='number'
							min={1}
							max={50}
						/>
					</div>
					<div className={styles.product__one_price}>
						<label htmlFor='price'>Стоимость, €</label>
						<Input
							{...register('price', {
								required: {
									value: true,
									message: 'Поле пустое'
								}
							})}
							id='price'
							error={formState.errors.price?.message}
							type='number'
							min={1}
						/>
					</div>
					<div className={styles.product__one_delivery_price}>
						<label htmlFor='deliveryPrice'>Доставка, €</label>
						<Input
							{...register('deliveryPrice')}
							id='deliveryPrice'
							error={formState.errors.deliveryPrice?.message}
							type='number'
							min={1}
						/>
					</div>
				</div>
				<CheckBoxRed
					title='Товар б/у (комиссия 15%, предоплата 100%, у продавца должен быть вариант оплаты PayU)'
					{...register('isUsed')}
				/>
				<div className={styles.column__two}>
					<TextArea
						title='Комментарий к товару'
						placeholder='Описание'
						className={styles.comment__product}
						error={formState.errors.description?.message}
						{...register('description', {
							required: {
								value: true,
								message: 'Описание пустое'
							}
						})}
					/>
					<div className={styles.delivery_type}>
						<span className={styles.type__mail}>
							Доставка по Украине: <h4>⠀Новой почтой</h4>
						</span>
						<div className={styles.feedback}>
							<span>Удобный канал для обратной связи:</span>
							<div>
								<CheckBox
									title='Почта'
									name='feedback'
									type='radio'
									checked={feedbackType == 'email'}
									onChange={() => setFeedbackType('email')}
								/>
								<CheckBox
									title='Вайбер'
									name='feedback'
									type='radio'
									checked={feedbackType == 'viber'}
									onChange={() => setFeedbackType('viber')}
								/>
								<CheckBox
									title='Телеграм'
									name='feedback'
									type='radio'
									checked={feedbackType == 'telegram'}
									onChange={() => setFeedbackType('telegram')}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.column__price}>
					<div>
						{data && !isLoading && (
							<Select
								options={data?.map(item => ({
									value: item._id,
									label: item.title
								}))}
								placeholder='Выберите магазин'
								onChange={e => e && setShopId(e.value)}
							/>
						)}
					</div>
					<CreateOrderFormSum
						price={watch('price')}
						deliveryPrice={watch('deliveryPrice')}
						count={watch('count')}
					/>
				</div>
			</div>
			<div className={styles.form__info}>
				<h5>Данные заказчика</h5>
				<div className={styles.column__inputs}>
					<Input
						placeholder='Имя'
						{...register('name', {
							required: {
								value: true,
								message: 'Имя пустое'
							}
						})}
						error={formState.errors.name?.message}
					/>
					<Input
						placeholder='Фамилия'
						{...register('surname', {
							required: {
								value: true,
								message: 'Фамилия пустая'
							}
						})}
						error={formState.errors.surname?.message}
					/>
					<Input
						placeholder='Номер телефона'
						{...register('phoneNumber', {
							pattern: {
								value:
									/^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
								message: 'Номер телефона не валидный'
							},
							required: {
								value: true,
								message: 'Номер телефона пустой'
							}
						})}
						error={formState.errors.phoneNumber?.message}
					/>
					<Input
						placeholder='e-mail'
						error={formState.errors.email?.message}
						{...register('email', {
							required: {
								value: true,
								message: 'e-mail пустой'
							}
						})}
					/>
				</div>
				<div className={styles.column__copyright}>
					<TextArea
						className={styles.textarea}
						placeholder='Комментарий'
						error={formState.errors.comment?.message}
						{...register('comment', {
							required: {
								value: true,
								message: 'Комментарий пустой'
							}
						})}
					/>
					<div className={styles.column__copyright_list}>
						<CheckBoxRed
							checked={isCheckedPolicy}
							onChange={() => setIsCheckedPolicy(prevState => !prevState)}
							title='Я соглашаюсь и принимаю коммерческие условия покупки и доставки*'
						/>
						<CreateOrderFormList />
					</div>
				</div>
			</div>
			<div className={styles.submit__button}>
				<Button type='submit' disabled={!isCheckedPolicy}>
					Отправить
				</Button>
			</div>
		</form>
	)
}

export default CreateOrderForm
