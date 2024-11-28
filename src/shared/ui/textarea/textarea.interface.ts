import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'

export interface ITextAreaProps
	extends DetailedHTMLProps<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		HTMLTextAreaElement
	> {
	title?: string
	error?: string
}
