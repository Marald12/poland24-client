import { Dispatch, PropsWithChildren, SetStateAction } from 'react'

export interface IPopUpProps extends PropsWithChildren {
	header: string
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
