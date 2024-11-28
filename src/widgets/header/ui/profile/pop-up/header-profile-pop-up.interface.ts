import { Dispatch, SetStateAction } from 'react'

export interface IHeaderProfilePopUpProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
