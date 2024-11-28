import { FC } from 'react'
import styles from './HomeSectionInfo.module.scss'
import cn from 'classnames'
import UrlProduct from '@/widgets/home-page/ui/section-info/ui/url-product/UrlProduct'
import Image from 'next/image'
import carImg from '@/assets/images/car.png'
import clockImg from '@/assets/images/clock.png'
import moneyOneImg from '@/assets/images/money_1.png'
import moneyTwoImg from '@/assets/images/money_2.png'
import listImg from '@/assets/images/list.png'

const HomeSectionInfo: FC = () => {
	return (
		<section className={cn(styles.wrapper, 'container')}>
			<div className={styles.column__title}>
				<h5>Быстрая доставка товаров из Польши и стран Еврорзоюза в Украину</h5>
				<p>оцени новый уровень в качестве обслуживания и скорости доставки</p>
				<UrlProduct />
			</div>
			<div className={styles.column__info}>
				<div>
					<p>
						Комиссия <br /> 6,38%
					</p>
					<Image src={moneyOneImg} alt='money one' width={313} />
				</div>
				<div>
					<p>
						Минимальная <br />
						предоплаты <br />
						30%
					</p>
					<Image src={moneyTwoImg} alt='money two' />
				</div>
				<div>
					<p>
						Доставка <br />
						товара <br />
						за 5-10 дней
					</p>
					<Image src={carImg} alt='car' />
				</div>
				<div>
					<p>
						доставим <br />
						заказы до 500€ <br />
						без пошлин
					</p>
					<Image src={listImg} alt='list' />
				</div>
				<div>
					<p>
						Возможность <br />
						оплатить <br />
						кредитными <br />
						средствами
					</p>
					<Image src={clockImg} alt='clock' />
				</div>
			</div>
		</section>
	)
}

export default HomeSectionInfo
