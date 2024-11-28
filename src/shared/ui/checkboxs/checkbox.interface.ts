import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface ICheckBoxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	title: string
}
