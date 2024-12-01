import { FC } from 'react'
import styles from './HomeSectionAboutUs.module.scss'
import cn from 'classnames'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import ButtonNoBackground from '@/shared/ui/buttons/no-background/ButtonNoBackground'

const HomeSectionAboutUs: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<div className={styles.column__info}>
				<SectionTitle
					title='О нас'
					description='15 лет опыт производства. Знаем все доставке'
				/>
				<p className={styles.description}>
					Компания Poland24 осуществляет доставку из любого
					магазина/поставщика/производителя стран Евросоюза, которые
					осуществляют доставку товара курьером в Польшу.
				</p>
				<ButtonNoBackground className={styles.button}>
					Подробнее
				</ButtonNoBackground>
			</div>
			<div className={styles.column__video}>
				<iframe
					src='https://www.youtube.com/embed/1db8YieAJcs?si=bFBpEwQYWriA7bng'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
			</div>
		</section>
	)
}

export default HomeSectionAboutUs
