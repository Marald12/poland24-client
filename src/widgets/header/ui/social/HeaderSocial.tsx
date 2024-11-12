import { FC } from 'react'
import styles from './HeaderSocial.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineMail } from 'react-icons/md'
import viberLogo from '@/assets/images/viber.svg'
import telegramLogo from '@/assets/images/telegram.svg'

const HeaderSocial: FC = () => {
	return (
		<div className={styles.header__social}>
			<div className={styles.header__social_links}>
				<span>Наши мессенджеры</span>
				<Link href='https://viber.com' target='_blank'>
					<Image src={viberLogo} alt={viberLogo} />
				</Link>
				<Link href='https://t.me/zmey0458' target='_blank'>
					<Image src={telegramLogo} alt={telegramLogo} />
				</Link>
			</div>
			<div className={styles.header__social_email}>
				<MdOutlineMail size={18} color='#95A4AA' />
				<span>info@poland24.com.ua</span>
			</div>
		</div>
	)
}

export default HeaderSocial
