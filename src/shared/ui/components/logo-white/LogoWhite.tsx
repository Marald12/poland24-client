import { FC } from 'react'
import styles from './LogoWhite.module.scss'
import Image from 'next/image'
import logo from '@/assets/images/logoWhite.svg'
import Link from 'next/link'

const LogoWhite: FC = () => {
	return (
		<Link href='/' className={styles.logo}>
			<Image src={logo} alt={logo} />
			<div>
				<span className={styles.logo__title}>
					<span>Po</span>land24.com.ua
				</span>
				<span className={styles.logo__description}>быстрая доставка</span>
			</div>
		</Link>
	)
}

export default LogoWhite
