import { AnchorHTMLAttributes, ReactNode } from 'react'

export interface ILinkUnderlineProps
	extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string
	className?: string
	children: ReactNode
}
