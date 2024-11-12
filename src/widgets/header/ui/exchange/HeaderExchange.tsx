import { FC } from 'react'
import styles from './HeaderExchange.module.scss'

const HeaderExchange: FC = () => {
	return (
		<div className={styles.header_exchange_rate}>
			<div>
				<b>'zł</b>
				<span>10,26</span>
			</div>
			<div>
				<b>€</b>
				<span>44,48</span>
			</div>
		</div>
	)
}

export default HeaderExchange
