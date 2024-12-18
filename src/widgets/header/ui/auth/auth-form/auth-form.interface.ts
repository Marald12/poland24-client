import { Dispatch, SetStateAction } from 'react'

export interface IAuthForm {
	email: string
	password: string
}

export interface IAuthFormProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
