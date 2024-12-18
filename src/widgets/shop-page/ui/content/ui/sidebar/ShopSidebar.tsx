'use client'
import React, { ChangeEvent, FC, useContext, useState } from 'react'
import styles from './ShopSidebar.module.scss'
import ShopContext from '@/shared/contexts/shop/shop.context'
import CheckBox from '@/shared/ui/checkboxs/checkbox/CheckBox'
import { countryApi } from '@/features/redux/api/country/country.api'
import { ICountry } from '@/features/redux/api/country/country.interface'
import { ICategory } from '@/features/redux/api/category/category.interface'
import { categoryApi } from '@/features/redux/api/category/category.api'
import cn from 'classnames'
import { FiMinus, FiPlus } from 'react-icons/fi'

const ShopSidebar: FC = () => {
	const context = useContext(ShopContext)
	const [activeCountries, setActiveCountries] = useState(true)
	const [activeCategories, setActiveCategories] = useState(true)
	const { data: countryData, isLoading: countryIsLoading } =
		countryApi.useGetAllCountryQuery(null)
	const { data: categoryData, isLoading: categoryIsLoading } =
		categoryApi.useGetAllCategoriesQuery(null)

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

	return (
		<aside className={styles.sidebar}>
			<div className={styles.option}>
				<div className={styles.option__header}>
					<h4>Выбор по странам</h4>
					<span onClick={countriesHandlerChange}>
						{!activeCountries ? <FiPlus /> : <FiMinus />}
					</span>
				</div>
				<div className={cn(styles.sections, activeCountries && styles.active)}>
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
				<div className={cn(styles.sections, activeCategories && styles.active)}>
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
	)
}

export default ShopSidebar
