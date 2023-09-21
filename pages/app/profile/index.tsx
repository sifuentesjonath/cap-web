import React from 'react'
import Profile from '@/containers/App/Profile';
// Layout
import { ProfileWithLayout } from '@/containers/App/Profile'
import AppLayout from '@components/layout/AppLayout'

const ProfilePage:ProfileWithLayout = () => {
  return (
    <Profile/>
  )
}

ProfilePage.layout = AppLayout;

export default ProfilePage;

