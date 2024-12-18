import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import styles from './SingleShopSlider.module.scss'
import { reviewApi } from '@/features/redux/api/review/review.api'
import SingleShopContext from '@/shared/contexts/single-shop.context'
import cn from 'classnames'
import SectionTitle from '@/shared/ui/components/section-title/SectionTitle'
import ButtonNoBackground from '@/shared/ui/buttons/no-background/ButtonNoBackground'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ReviewSliderItem from '@/widgets/single-shop-page/provider/ui/footer/slider/item/ReviewSliderItem'

const SingleShopSlider: FC = () => {
	const { shop } = useContext(SingleShopContext)
	const { data, isLoading } = reviewApi.useGetAllReviewsQuery(
		shop?._id as string
	)
	const ref = useRef<HTMLDivElement>(null)
	const [count, setCount] = useState(1)
	const [maxCount, setMaxCount] = useState(0)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const mobileSliderButtons = Array.from({ length: maxCount }, (_, i) => i + 1)

	window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

	useEffect(() => {
		if (data) {
			const widthItem = screenWidth <= 700 ? 203 : 400
			const value = Math.round((data.length + 1) / (screenWidth / widthItem))
			setMaxCount(value)
		}
	}, [data, screenWidth])

	const leftClickHandler = () => {
		if (count > 1 && ref.current) {
			if (count == 2) {
				ref.current!.style.transform = `translateX(0)`
			} else {
				ref.current!.style.transform = `translateX(-${screenWidth * (count - 2)}px)`
			}
			setCount(prevState => prevState - 1)
		}
	}

	const rightClickHandler = () => {
		if (count >= 1 && count < maxCount && ref.current) {
			setCount(prevState => prevState + 1)
			ref.current.style.transform = `translateX(-${screenWidth * count}px)`
		}
	}

	return (
		<section className={styles.wrapper}>
			<div className={cn(styles.header, 'container')}>
				<SectionTitle title='Отзывы о магазине' />
				<div className={styles.buttons}>
					<div className={styles.slider__button}>
						<ButtonNoBackground onClick={leftClickHandler}>
							<FaArrowLeft />
						</ButtonNoBackground>
						<span>
							<b>{count}</b>/{maxCount}
						</span>
						<ButtonNoBackground onClick={rightClickHandler}>
							<FaArrowRight />
						</ButtonNoBackground>
					</div>
				</div>
				<Link href='shop'>
					<ButtonNoBackground>все магазины</ButtonNoBackground>
				</Link>
			</div>
			<div className={styles.slider}>
				<div className={styles.slider__items} ref={ref}>
					{isLoading ? (
						<h1>Загрузка...</h1>
					) : (
						data &&
						data.map(item => <ReviewSliderItem review={item} key={item._id} />)
					)}
				</div>
				<div className={styles.mobile__slider_button}>
					<button
						onClick={leftClickHandler}
						className={styles.mobile__button_left}
					>
						<IoIosArrowBack />
					</button>
					<button
						onClick={rightClickHandler}
						className={styles.mobile__button_right}
					>
						<IoIosArrowForward />
					</button>
				</div>
			</div>
			<div className={styles.mobile__count}>
				{mobileSliderButtons.map(int => (
					<button key={int} className={cn(count == int && styles.active)} />
				))}
			</div>
		</section>
	)
}

export default SingleShopSlider
