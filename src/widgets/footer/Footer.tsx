import { FC } from 'react'
import styles from './Footer.module.scss'
import cn from 'classnames'
import LogoWhite from '@/shared/ui/logo-white/LogoWhite'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.footer__container)}>
				<div className={styles.column__logo}>
					<LogoWhite />
				</div>
			</div>
		</footer>
	)
}

export default Footer
