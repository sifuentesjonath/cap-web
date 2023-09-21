import { FC } from 'react'
import { UserProfileType } from '@/service/apiTypes';
// Components
import ProfileForm from './ProfileForm';
// Style
import { ScrollableContainer } from '../style'

interface IProfileViewProps {
	profile: UserProfileType;
}
const ProfileView: FC<IProfileViewProps> = ({ profile }) => {
	return (
		<ScrollableContainer>
			<ProfileForm userProfile={profile} />
		</ScrollableContainer>
	)
}

export default ProfileView