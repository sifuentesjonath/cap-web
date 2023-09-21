import React from 'react'
import Properties from '@/containers/App/Properties'
// Layout
import AppLayout from '@components/layout/AppLayout'

const PropertiesPage = () => {
  return (
    <Properties/>
  )
}

PropertiesPage.layout = AppLayout;

export default PropertiesPage;