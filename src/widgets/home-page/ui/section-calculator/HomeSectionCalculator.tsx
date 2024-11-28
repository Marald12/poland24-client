import { FC } from 'react'
import styles from './HomeSectionCalculator.module.scss'
import calculatorImage from '@/assets/images/calculator.png'
import Image from 'next/image'
import cn from 'classnames'
import SectionCalculatorForm from '@/widgets/home-page/ui/section-calculator/form/SectionCalculatorForm'

const HomeSectionCalculator: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<div className={styles.column__info}>
				<h1>Расчитай стоимость доставки товаров из Польши</h1>
				<ul>
					<li>
						Комиссия сервиса для товаров с фактурой VAT стоимостью от 250zł:
						16,38%
					</li>
					<li>
						Комиссия сервиса для товаров стоимостью до 250zl (VAT/ без VAT):
						50zł.
					</li>
					<li>
						Комиссия сервиса для товаров без фактуры VAT стоимостью от 250zl:
						15%
					</li>
				</ul>
			</div>
			<div className={styles.column__form}>
				<SectionCalculatorForm />
			</div>
			<Image
				src={calculatorImage}
				alt='calculator'
				className={styles.calculator}
			/>
		</section>
	)
}

export default HomeSectionCalculator
