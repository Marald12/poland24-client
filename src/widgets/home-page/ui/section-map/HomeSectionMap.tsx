import { FC } from 'react'
import styles from './HomeSectionMap.module.scss'
import cn from 'classnames'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import mapImage from '@/assets/images/map.svg'
import Image from 'next/image'

const HomeSectionMap: FC = () => {
	return (
		<section className={cn(styles.wrapper)}>
			<div className='container'>
				<SectionTitle title='Мы доставлям из' />
				<div className={styles.container}>
					<div className={styles.list}>
						<ul>
							<li>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
						</ul>
						<ul>
							<li>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li className={styles.active}>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Польша</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Германия</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
							<li>
								<h3 className={styles.bold}>Франции</h3>{' '}
								<h3 className={styles.regular}>от 0,00 USD</h3>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.map}>
				<Image src={mapImage} alt={mapImage} />
			</div>
		</section>
	)
}

export default HomeSectionMap
