import { createContext } from 'react'
import { IShop } from '@/features/redux/api/shop/shop.interface'

type SingleShopContextInitialParams = {
	shop: IShop | undefined
}

const SingleShopContext = createContext<SingleShopContextInitialParams>({
	shop: undefined
})

export default SingleShopContext
