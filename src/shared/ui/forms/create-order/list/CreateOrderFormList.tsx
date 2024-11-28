import { FC } from 'react'
import styles from './CreateOrderFormList.module.scss'

const CreateOrderFormList: FC = () => {
	return (
		<ul className={styles.list}>
			<li>
				Комиссия сервиса для товаров с фактурой VAT стоимостью от 250zł: 6,38%
			</li>
			<li>
				Комиссия сервиса для товаров с фактурой VAT стоимостью до 250zl : 50zł.
			</li>
			<li>
				Комиссия сервиса для товаров без фактуры VAT стоимостью от 250zl: 15%
			</li>
			<li>
				Вы должны будете внести предоплату в размере(для новых товаров): 30%
			</li>
			<li>
				Вы должны будете внести предоплату в размере(для б/у товаров): 100%
			</li>
			<li>Крупногабаритные и б/у товары не подлежат возврату.</li>
		</ul>
	)
}

export default CreateOrderFormList
