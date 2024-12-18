'use client'
import React, {
	ChangeEvent,
	FC,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react'
import styles from './ShopList.module.scss'
import { shopApi } from '@/features/redux/api/shop/shop.api'
import ShopListItem from '@/widgets/shop-page/ui/content/ui/shops/item/ShopListItem'
import ShopContext from '@/shared/contexts/shop/shop.context'
import { IoMdClose } from 'react-icons/io'
import { CgTrash } from 'react-icons/cg'
import { CiFilter } from 'react-icons/ci'
import { FiMinus, FiPlus } from 'react-icons/fi'
import cn from 'classnames'
import CheckBox from '@/shared/ui/checkboxs/checkbox/CheckBox'
import { countryApi } from '@/features/redux/api/country/country.api'
import { categoryApi } from '@/features/redux/api/category/category.api'
import { ICountry } from '@/features/redux/api/country/country.interface'
import { ICategory } from '@/features/redux/api/category/category.interface'

const ShopList: FC = () => {
	const { countries, categories, setCountries, setCategories } =
		useContext(ShopContext)
	const filters = () => {
		const countriesIds = countries.map(item => item.id)
		const categoriesIds = categories.map(item => item.id)
		if (countries.length) return { countries: countriesIds }
		if (categories.length) return { categories: categoriesIds }
		if (countries.length && categories.length)
			return { categories: categoriesIds, countries: countriesIds }
		return {}
	}
	const { data, isLoading, refetch } = shopApi.useGetFilterShopsQuery(filters())
	const context = useContext(ShopContext)
	const [activeCountries, setActiveCountries] = useState(true)
	const [activeCategories, setActiveCategories] = useState(true)
	const [activeSidebar, setActiveSidebar] = useState(false)
	const { data: countryData, isLoading: countryIsLoading } =
		countryApi.useGetAllCountryQuery(null)
	const { data: categoryData, isLoading: categoryIsLoading } =
		categoryApi.useGetAllCategoriesQuery(null)
	const ref = useRef<HTMLElement>(null)

	const changeCountryHandler = (
		event: ChangeEvent<HTMLInputElement>,
		country: ICountry
	) => {
		if (event.target.checked) {
			context.setCountries(prevState => [
				...prevState,
				{ id: country._id, name: country.name }
			])
		} else {
			context.setCountries(prevState =>
				prevState.filter(item => item.id !== country._id)
			)
		}
	}

	const changeCategoryHandler = (
		event: ChangeEvent<HTMLInputElement>,
		category: ICategory
	) => {
		if (event.target.checked) {
			context.setCategories(prevState => [
				...prevState,
				{ id: category._id, name: category.name }
			])
		} else {
			context.setCategories(prevState =>
				prevState.filter(item => item.id !== category._id)
			)
		}
	}

	const categoriesHandlerChange = () => {
		setActiveCategories(prevState => !prevState)
	}

	const countriesHandlerChange = () => {
		setActiveCountries(prevState => !prevState)
	}

	useEffect(() => {
		refetch()
	}, [countries, categories])

	useEffect(() => {
		if (ref.current) {
			if (activeSidebar) {
				ref.current!.style.display = 'block'
				setTimeout(() => (ref.current!.style.transform = 'translateY(0)'), 1)
			} else {
				ref.current!.style.transform = 'translateY(-1000px)'
				setTimeout(() => (ref.current!.style.display = 'none'), 300)
			}
		}
	}, [activeSidebar])

	return (
		<div className={styles.wrapper}>
			<div className={styles.tags}>
				{countries.map(item => (
					<div
						key={item.id}
						onClick={() =>
							setCountries(prevState =>
								prevState.filter(itemm => itemm.id !== item.id)
							)
						}
					>
						{item.name}{' '}
						<span>
							<IoMdClose size={18} />
						</span>
					</div>
				))}
				{categories.map(item => (
					<div
						key={item.id}
						onClick={() =>
							setCategories(prevState =>
								prevState.filter(itemm => itemm.id !== item.id)
							)
						}
					>
						{item.name}{' '}
						<span>
							<IoMdClose size={18} />
						</span>
					</div>
				))}
				{[countries, categories].length >= 1 && (
					<button
						onClick={() => {
							setCategories([])
							setCountries([])
						}}
					>
						<CgTrash size={18} /> Очистить фильтр
					</button>
				)}
			</div>
			<div className={styles.filter__mobile}>
				<button onClick={() => setActiveSidebar(prevState => !prevState)}>
					<CiFilter size={19} /> Фильтр
				</button>
				<aside ref={ref} className={cn(styles.sidebar)}>
					<div className={styles.option}>
						<div className={styles.option__header}>
							<h4>Выбор по странам</h4>
							<span onClick={countriesHandlerChange}>
								{!activeCountries ? <FiPlus /> : <FiMinus />}
							</span>
						</div>
						<div
							className={cn(styles.sections, activeCountries && styles.active)}
						>
							{countryIsLoading ? (
								<h1>Загрузка...</h1>
							) : (
								countryData &&
								countryData.map(item => (
									<div className={styles.section} key={item._id}>
										<CheckBox
											title={item.name}
											onChange={e => changeCountryHandler(e, item)}
											checked={context.countries.some(
												itemm => itemm.id == item._id
											)}
										/>
									</div>
								))
							)}
						</div>
					</div>
					<div className={styles.option}>
						<div className={styles.option__header}>
							<h4>Выбор по категориям</h4>
							<span onClick={categoriesHandlerChange}>
								{!activeCategories ? <FiPlus /> : <FiMinus />}
							</span>
						</div>
						<div
							className={cn(styles.sections, activeCategories && styles.active)}
						>
							{categoryIsLoading ? (
								<h1>Загрузка...</h1>
							) : (
								categoryData &&
								categoryData.map(item => (
									<div className={styles.section} key={item._id}>
										<CheckBox
											title={item.name}
											onChange={e => changeCategoryHandler(e, item)}
											checked={context.categories.some(
												itemm => itemm.id == item._id
											)}
										/>
									</div>
								))
							)}
						</div>
					</div>
				</aside>
			</div>
			<div className={styles.list}>
				{isLoading ? (
					<h1>Загрузка...</h1>
				) : (
					data && data.map(item => <ShopListItem shop={item} key={item._id} />)
				)}
				{!isLoading && data?.length == 0 && <h2>Магазины не найдены</h2>}
			</div>
		</div>
	)
}

export default ShopList
