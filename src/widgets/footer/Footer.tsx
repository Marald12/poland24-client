import { FC } from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'
import LogoWhite from '@/shared/ui/components/logo-white/LogoWhite'
import Link from 'next/link'
import viberLogo from '@/assets/images/viber.svg'
import telegramLogo from '@/assets/images/telegram.svg'
import instagramLogo from '@/assets/images/instagram.png'
import Image from 'next/image'
import { IoLocationOutline } from 'react-icons/io5'
import { FiClock } from 'react-icons/fi'
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.footer__container)}>
				<div className={styles.column__logo}>
					<LogoWhite />
					<p className={styles.logo__copyright}>
						Copyright © 2022 Poland24.com.ua. Все права защищены.
					</p>
				</div>
				<div className={styles.column__nav}>
					<h5>Навигация</h5>
					<Link href='/about-us'>О компании</Link>
					<Link href='/about-us'>Доставка из магазинов Европы</Link>
					<Link href='/about-us'>Список магазинов</Link>
					<Link href='/about-us'>Отзывы</Link>
				</div>
				<div className={styles.column__nav_two}>
					<Link href='/about-us'>FAQ</Link>
					<Link href='/about-us'>Товар на складе в Украине</Link>
					<Link href='/about-us'>Правила магазина</Link>
				</div>
				<div className={styles.column__social}>
					<h5>Мы в соц.сетяц:</h5>
					<div>
						<Link href='https://viber.com' target='_blank'>
							<Image src={viberLogo} alt={viberLogo} />
						</Link>
						<Link href='https://t.me/zmey0458' target='_blank'>
							<Image src={telegramLogo} alt={telegramLogo} />
						</Link>
						<Link href='https://instagram.com/illiya_zmey' target='_blank'>
							<Image src={instagramLogo} alt='instagram' />
						</Link>
					</div>
				</div>
				<div className={styles.column__contacts}>
					<h5>Контакты</h5>
					<div>
						<IoLocationOutline color='#fff' size={21} />{' '}
						<span>Украина, Жовква, ул. Набержная, 1</span>
					</div>
					<div>
						<FiClock color='#fff' size={21} />{' '}
						<span>Время работы с 10:00 до 19:00</span>
					</div>
					<div>
						<MdOutlinePhone color='#fff' size={21} />{' '}
						<b>+38 (093) 496 58 00 </b>
					</div>
					<div>
						<MdOutlineEmail color='#fff' size={21} />{' '}
						<span className={styles.column__contacts_email}>
							poland24.com.ua
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
