import React, { FC, useState, useEffect, useMemo } from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import useLogout from '@/hooks/useLogout';
// Type
import { TitleHolderType, UserProfileType } from '@/service/apiTypes';
// Components
import AppLayout from '@components/layout/AppLayout';
import ToggleGroupActive, { IToggleGroupActiveOption } from '@components/block/ToggleGroupActiveChange';
import ProfileButton from './ProfileView/ProfileButton';
import AddTitleHolderButton from './TitleHolderView/AddTitleHolderButton';
import ProfileView from './ProfileView';
import TitleHolderView from './TitleHolderView';
import StyledLoader from '@components/element/StyledLoader';
// Service api
import { getProfile, getTitleholders } from '@/service/api';
// Styles
import {
  ProfileContainer,
  TopPositionContainer
} from './style'
import useProfileData from '@/service/useApi/Profile/useProfileData';

export interface IProfileProps { }
export type ProfileWithLayout = FC<IProfileProps> & {
  layout: typeof AppLayout;
};
const Profile = () => {
  const [tabView, setTabView] = useState<string>('profile');
  const [titleholders, setTitleholders] = useState<TitleHolderType[]>([]);
  const [profile, setProfile] = useState<UserProfileType>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isTitleHoldersAbleView = !Array.isArray(titleholders) || titleholders.length != 0;
  const router = useRouter();
  const logOutUser = useLogout();

  const onLogout = async () => {
    try {
      setIsLoading(true);
      await logOutUser(router);
    } finally {
      setIsLoading(true);
    }
  };

  const { data: titleholdersResult, isLoading: isLoadingTitleHolders } = useQuery<TitleHolderType[]>(
    ['getTitleholders'], getTitleholders, { refetchOnWindowFocus: false }
  );

  const { data: currentProfile, isLoading: isLoadingProfile } = useProfileData({ refetchOnWindowFocus: false });

  const onTabChange = (tabSelection: string): string => {
    tabSelection = tabSelection === '' ? tabView : tabSelection;
    setTabView(tabSelection);
    return tabSelection;
  }
  const profileOptions: IToggleGroupActiveOption[] = useMemo(
    () => [
      { title: 'Personal Information', value: 'profile' },
      { title: 'Title Holders', value: 'titleholders' }
    ],
    []
  )

  return (
    <ProfileContainer>
      {isLoadingProfile || isLoadingTitleHolders && <StyledLoader />}

      <TopPositionContainer isAddButton={tabView != 'profile' ? true : false}>
        <ToggleGroupActive
          options={profileOptions}
          onValueChange={(value) => onTabChange(value)}
          className={`toggle-item-container`}
          itemClassName={`toggle-item`}
          itemClassNameActive={`toggle-item-active`}
          currentActive={tabView}
        />

        {tabView === 'profile' && <ProfileButton onLogout={onLogout} />}
        {tabView === 'titleholders' && <AddTitleHolderButton profile={currentProfile} />}
      </TopPositionContainer>

      {tabView === 'profile' && (
        currentProfile && <ProfileView profile={currentProfile} />
      )}

      {tabView === 'titleholders' && (
        titleholdersResult && <TitleHolderView titleHolders={titleholdersResult} />
      )}
    </ProfileContainer>
  )
}

export default Profile;
