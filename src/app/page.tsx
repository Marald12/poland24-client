import { NextPage } from 'next'
import HomeSectionInfo from '@/widgets/home-page/ui/section-info/HomeSectionInfo'
import HomeSectionListWork from '@/widgets/home-page/ui/section-list-work/HomeSectionListWork'
import HomeSectionAboutUs from '@/widgets/home-page/ui/section-about-us/ui/HomeSectionAboutUs'
import HomeSectionCalculator from '@/widgets/home-page/ui/section-calculator/HomeSectionCalculator'
import HomeSectionMap from '@/widgets/home-page/ui/section-map/HomeSectionMap'

const Page: NextPage = () => {
	return (
		<div>
			<HomeSectionInfo />
			<HomeSectionListWork />
			<HomeSectionAboutUs />
			<HomeSectionCalculator />
			<HomeSectionMap />
		</div>
	)
}

export default Page
