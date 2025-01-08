import React, {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from 'react'
import styles from './RequestItem.module.scss'
import Input from '@/shared/ui/input/Input'
import cn from 'classnames'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { LuImagePlus } from 'react-icons/lu'
import { IoMdClose } from 'react-icons/io'

const RequestItem: FC<{
	setArray: Dispatch<SetStateAction<number[]>>
	count: number
	setItems: Dispatch<
		SetStateAction<
			{
				url: string
				comment: string
				files: File[]
				count: number
			}[]
		>
	>
}> = ({ count, setArray, setItems }) => {
	const [isState, setIsState] = useState(false)
	const [files, setFiles] = useState<File[]>([])
	const [url, setUrl] = useState<string>('')
	const [comment, setComment] = useState<string>('')

	const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const newFiles: File[] = []
			for (let i = 0; i < event.target.files.length; i++) {
				const file = event.target.files.item(i)
				if (file) {
					newFiles.push(file)
				}
			}
			setFiles(prevState => [...prevState, ...newFiles])
		}
	}

	useEffect(() => {
		setItems(prevState =>
			prevState.map(item =>
				item.count === count ? { ...item, url, comment, files } : item
			)
		)
	}, [url, comment, files])

	return (
		<div className={styles.item}>
			<div className={styles.column}>
				<div className={styles.item__title}>
					<label htmlFor={`item-${count}${count}`}>Товар {count}</label>
					<Input
						id={`item-${count}${count}`}
						placeholder='Вставте ссылку на товар'
						type='url'
						value={url}
						onChange={e => setUrl(e.target.value)}
					/>
				</div>
				<div className={styles.upload__image}>
					<input
						type='file'
						id={`upload-filee-${count}`}
						onChange={uploadFile}
						multiple
						accept='image/png, image/jpeg'
					/>
					<label htmlFor={`upload-filee-${count}`}>
						<LuImagePlus size={21} color='#fff' />
					</label>
				</div>
				<div className={styles.item__comment}>
					<label htmlFor={`item-${count}`}>Комментарий</label>
					<Input
						id={`item-${count}`}
						value={comment}
						onChange={e => setComment(e.target.value)}
					/>
				</div>
				<div
					className={cn(styles.button, isState && styles.deactive)}
					onClick={() => {
						setIsState(prevState => !prevState)
						if (!isState) {
							setArray(prevState => [...prevState, count + 1])
							setItems(prevState => [
								...prevState,
								{ url: '', count: count + 1, comment: '', files: [] }
							])
						} else {
							setArray(prevState => [...prevState.filter(i => i !== count)])
							setItems(prevState => [
								...prevState.filter(i => i.count !== count)
							])
						}
					}}
				>
					{isState ? (
						<FaMinus color='#fff' size={16} />
					) : (
						<FaPlus color='#fff' size={16} />
					)}
				</div>
			</div>
			{files.length >= 1 && (
				<div className={styles.images}>
					<span>Прикреплено фото:</span>
					<div className={styles.images__items}>
						{files.map((item, index) => (
							<div key={item.name} className={styles.images__item}>
								<LuImagePlus size={16} color='#000' />
								<h4>Фото {index + 1}</h4>
								<span
									onClick={() =>
										setFiles(prevState => [
											...prevState.filter(i => i.name !== item.name)
										])
									}
								>
									<IoMdClose size={16} />
								</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default RequestItem
