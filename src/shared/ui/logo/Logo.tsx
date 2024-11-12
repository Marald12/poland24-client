import { FC } from 'react'
import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import styles from './Logo.module.scss'
import Link from 'next/link'

const Logo: FC = () => {
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

export default Logo
