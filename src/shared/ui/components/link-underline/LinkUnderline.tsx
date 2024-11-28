import { FC } from 'react'
import styles from './LinkUnderline.module.scss'
import Link from 'next/link'
import { ILinkUnderlineProps } from '@/shared/ui/components/link-underline/link-undelrine.interface'
import cn from 'classnames'

const LinkUnderline: FC<ILinkUnderlineProps> = ({
	href,
	children,
	className,
	...rest
}) => {
	return (
		<Link href={href} className={cn(styles.link, className)} {...rest}>
			{children}
		</Link>
	)
}

export default LinkUnderline
