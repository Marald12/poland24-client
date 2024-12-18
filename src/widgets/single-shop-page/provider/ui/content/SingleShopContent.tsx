'use client'
import React, { FC, useContext, useState } from 'react'
import styles from './SingleShopContent.module.scss'
import cn from 'classnames'
import SingleShopContext from '@/shared/contexts/single-shop.context'
import Image from 'next/image'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import Input from '@/shared/ui/input/Input'
import PlaceOrderButton from '@/shared/ui/buttons/place-order/PlaceOrderButton'
import { useForm } from 'react-hook-form'
import { IPriceForm } from '@/widgets/single-shop-page/provider/ui/content/price-form.interface'
import Button from '@/shared/ui/buttons/button/Button'
import CheckBoxRed from '@/shared/ui/checkboxs/checkbox-red/CheckBoxRed'

const SingleShopContent: FC = () => {
	const { shop } = useContext(SingleShopContext)
	const [url, setUrl] = useState('')
	const [summaZl, setSummaZl] = useState('0,00')
	const [summaUAH, setSummaUAH] = useState('0,00')
	const { register, handleSubmit } = useForm<IPriceForm>()

	const submitHandler = (data: IPriceForm) => {
		if (data.isUsed) {
			setSummaZl(
				String(
					(
						Number(data.price) +
						(Number(data.price) / 100) * 10 +
						(Number(data.price) / 100) * 15
					).toFixed(2)
				).replace('.', ',')
			)
			setSummaUAH(
				String(
					(
						Number(data.price * 10.17) +
						(Number(data.price * 10.17) / 100) * 10 +
						(Number(data.price * 10.17) / 100) * 15
					).toFixed(2)
				).replace('.', ',')
			)
		} else {
			setSummaZl(
				String(
					(Number(data.price) + (Number(data.price) / 100) * 10).toFixed(2)
				).replace('.', ',')
			)
			setSummaUAH(
				String(
					(
						Number(data.price * 10.17) +
						(Number(data.price * 10.17) / 100) * 10
					).toFixed(2)
				).replace('.', ',')
			)
		}
	}

	return (
		<div className={cn(styles.wrapper, 'container')}>
			{shop && (
				<>
					<div className={styles.image}>
						<SectionTitle title={shop.title} className={styles.title__mobile} />
						<Image
							src={shop.bannerPath}
							alt={shop.bannerPath}
							width={635.71}
							height={525}
						/>
					</div>
					<div className={styles.info}>
						<SectionTitle title={shop.title} className={styles.title} />
						<h4 className={styles.description}>{shop.description}</h4>
						<div className={styles.order}>
							<Input
								placeholder='Вставить ссылку на товар'
								value={url}
								onChange={e => setUrl(e.target.value)}
							/>
							<PlaceOrderButton url={url}>Заказать</PlaceOrderButton>
						</div>
						<form
							className={styles.price}
							onSubmit={handleSubmit(submitHandler)}
						>
							<h3>Расчитай стоимость доставки товаров из Польши</h3>
							<div className={styles.input}>
								<Input placeholder='Цена товара, zł' {...register('price')} />
								<Button>Расчитать</Button>
							</div>
							<div className={styles.total__price}>
								<div className={styles.total__price_column}>
									<h4>Сумма, zł</h4>
									<h3>{summaZl}</h3>
									<h4>Сумма, ₴</h4>
									<h3>{summaUAH}</h3>
								</div>
							</div>
							<CheckBoxRed
								title='На товар (новый или б/у) не выставляется фактура VAT (добавляется 15% комиссия)'
								className={styles.checkbox}
								{...register('isUsed')}
							/>
						</form>
						<p className={styles.bottom__description}>
							Немецкий магазин в ассортименте которого более 50 000 товаров –
							начиная от бытовой электроники, таких как ноутбук, планшет и ТВ
							заканчивая бытовой техникой как стиральная машина и холодильник.
							Садовое оборудование Kärcher и газонокосилки. Ассортимент включает
							все, вплоть до игрушек ЛЕГО и Барби для самых маленьких. Продукция
							на любой кошелек и от известных производителей, таких как Apple,
							ASUS, Intel, Microsoft, Samsung, Canon, Liebherr, Bosch, etc.
						</p>
						<div className={styles.deliveryInfo}>
							<span>Доставки:</span>
							<h4>до {shop.deliveryDay} дней</h4>
							<span>Комиссия:</span>
							<h4>{shop.commissionPercentage}%</h4>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default SingleShopContent
