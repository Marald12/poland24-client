import React, { FC, PropsWithChildren } from 'react'
import ProfilePageContainer from '@/widgets/profile-page/ProfilePageContainer'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return <ProfilePageContainer>{children}</ProfilePageContainer>
}

export default Layout
