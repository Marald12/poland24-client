'use client'
import { FC, useState } from 'react'
import styles from './UrlProduct.module.scss'
import Input from '@/shared/ui/input/Input'
import PlaceOrderButton from '@/shared/ui/buttons/place-order/PlaceOrderButton'

const UrlProduct: FC = () => {
	const [url, setUrl] = useState('')

	return (
		<div className={styles.wrapper}>
			<Input
				type='url'
				value={url}
				onChange={e => setUrl(e.target.value)}
				placeholder='Вставить ссылку на товар'
			/>
			<PlaceOrderButton url={url} />
		</div>
	)
}

export default UrlProduct
