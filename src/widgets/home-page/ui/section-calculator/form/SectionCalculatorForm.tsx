'use client'
import { FC, useState } from 'react'
import styles from './SectionCalculatorForm.module.scss'
import Input from '@/shared/ui/input/Input'
import ButtonGray from '@/shared/ui/buttons/gray/ButtonGray'
import { useForm } from 'react-hook-form'
import { ISectionCalculatorForm } from '@/widgets/home-page/ui/section-calculator/form/section-calculator-form.interface'
import CheckBoxWhite from '@/shared/ui/checkboxs/checkbox-white/CheckBoxWhite'
import cn from 'classnames'

const SectionCalculatorForm: FC = () => {
	const { formState, watch, register, handleSubmit } =
		useForm<ISectionCalculatorForm>()
	const [currency, setCurrency] = useState<'zł' | '€'>('zł')

	const [sum, setSum] = useState(0)

	const sumZL = () => {
		if (!sum) {
			return '0,00'
		} else if (currency == 'zł') {
			if (watch('isUsed')) {
				return String(
					(sum + (sum / 100) * 10 + (sum / 100) * 15).toFixed(2)
				).replace('.', ',')
			} else {
				return String((sum + (sum / 100) * 10).toFixed(2)).replace('.', ',')
			}
		} else {
			if (watch('isUsed')) {
				return String(
					(
						sum * 4.31 +
						((sum * 4.31) / 100) * 10 +
						((sum * 4.31) / 100) * 15
					).toFixed(2)
				).replace('.', ',')
			} else {
				return String(
					(sum * 4.31 + ((sum * 4.31) / 100) * 10).toFixed(2)
				).replace('.', ',')
			}
		}
	}

	const sumUAH = () => {
		if (!sum) {
			return '0,00'
		} else if (currency == 'zł') {
			if (watch('isUsed')) {
				return String(
					(
						sum * 10.17 +
						((sum * 10.17) / 100) * 10 +
						((sum * 10.17) / 100) * 15
					).toFixed(2)
				).replace('.', ',')
			} else {
				return String(
					(sum * 10.17 + ((sum * 10.17) / 100) * 10).toFixed(2)
				).replace('.', ',')
			}
		} else {
			if (watch('isUsed')) {
				return String(
					(
						sum * 43.61 +
						((sum * 43.61) / 100) * 10 +
						((sum * 43.61) / 100) * 15
					).toFixed(2)
				).replace('.', ',')
			} else {
				return String(
					(sum * 43.61 + ((sum * 43.61) / 100) * 10).toFixed(2)
				).replace('.', ',')
			}
		}
	}

	const submitHandler = (data: ISectionCalculatorForm) => {
		setSum(Number(data.price) + Number(data.delivery))
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
			<div className={styles.mobile__ggg}>
				<span
					className={cn(currency == 'zł' && styles.active)}
					onClick={() => setCurrency('zł')}
				>
					zł
				</span>
				<span
					className={cn(currency == '€' && styles.active)}
					onClick={() => setCurrency('€')}
				>
					€
				</span>
			</div>
			<div className={styles.hhh}>
				<Input
					type='number'
					className={styles.input}
					placeholder={`Цена*, ${currency}`}
					{...register('price')}
				/>
				<div className={styles.ggg}>
					<span
						className={cn(currency == 'zł' && styles.active)}
						onClick={() => setCurrency('zł')}
					>
						zł
					</span>
					<span
						className={cn(currency == '€' && styles.active)}
						onClick={() => setCurrency('€')}
					>
						€
					</span>
				</div>
			</div>
			<Input
				type='number'
				className={styles.input}
				placeholder={`Доставка*, ${currency}`}
				{...register('delivery')}
			/>
			<ButtonGray type='submit'>Расчитать</ButtonGray>
			<div className={styles.total__price}>
				<div className={styles.price}>
					<h3>Сумма, zł</h3>
					<h2>{sumZL()}</h2>
				</div>
				<div className={styles.price}>
					<h3>Сумма, ₴</h3>
					<h2>{sumUAH()}</h2>
				</div>
				<div className={styles.mobile__price}>
					<h3>zł</h3>
					<h2>{sumZL()}</h2>
				</div>
				<div className={styles.mobile__price}>
					<h3>₴</h3>
					<h2>{sumUAH()}</h2>
				</div>
			</div>
			<CheckBoxWhite
				className={styles.checkbox}
				title='На товар (новый или б/у) не выставляется фактура VAT (добавляется 15% комиссия)'
				{...register('isUsed')}
			/>
		</form>
	)
}

export default SectionCalculatorForm
