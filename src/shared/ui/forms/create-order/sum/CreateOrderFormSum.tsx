import { FC } from 'react'
import styles from './CreateOrderFormSum.module.scss'
import { ICreateOrderFormSumProps } from '@/shared/ui/forms/create-order/sum/create-order-form-sum.interface'

const CreateOrderFormSum: FC<ICreateOrderFormSumProps> = ({
	price,
	deliveryPrice,
	count
}) => {
	const sum = Number(price) + Number(deliveryPrice) * Number(count)

	return (
		<div className={styles.sum}>
			<span>Сумма, zł</span>
			<h3>
				{!sum
					? '0,00'
					: String((sum * 4.34 + ((sum * 4.34) / 100) * 10).toFixed(2)).replace(
							'.',
							','
						)}
			</h3>
			<span>Сумма, ₴ </span>
			<h3>
				{!sum
					? '0,00'
					: String(
							(sum * 43.61 + ((sum * 43.61) / 100) * 10).toFixed(2)
						).replace('.', ',')}
			</h3>
		</div>
	)
}

export default CreateOrderFormSum
