import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISectionTitleProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	description?: string
}
