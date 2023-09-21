import React from 'react'
import Home from '@/containers/App/Home'
import { useMediaQuery } from '@react-hook/media-query';
// Layout
import { HomeWithLayout } from '@/containers/App/Home'
import AppLayout from '@components/layout/AppLayout'

const HomePage:HomeWithLayout = () => {
  return (
    <Home/>
  )
}

HomePage.layout = AppLayout;

export default HomePage;

