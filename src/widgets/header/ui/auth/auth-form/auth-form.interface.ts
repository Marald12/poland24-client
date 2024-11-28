import { Dispatch, SetStateAction } from 'react'

export interface IAuthForm {
	email: string
	password: string
}

export interface IAuthFormProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
