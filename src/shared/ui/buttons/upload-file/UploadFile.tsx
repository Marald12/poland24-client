import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import styles from './UploadFile.module.scss'
import { LuImagePlus } from 'react-icons/lu'
import cn from 'classnames'

const UploadFile: FC<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...rest }) => {
	const index = Math.random()

	return (
		<div className={cn(styles.file, className)}>
			<input type='file' id={`file-${index}`} {...rest} />
			<label htmlFor={`file-${index}`}>
				<LuImagePlus size={19} color='#fff' /> Прикрепить фото
			</label>
		</div>
	)
}

export default UploadFile
