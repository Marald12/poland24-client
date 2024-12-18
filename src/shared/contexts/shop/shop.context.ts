import { createContext } from 'react'
import { IShopContext } from '@/shared/contexts/shop/shop-context.interface'

const ShopContext = createContext<IShopContext>({
	countries: [],
	categories: [],
	setCountries: () => {},
	setCategories: () => {}
})

export default ShopContext
