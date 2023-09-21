import React from 'react'
import Documents from '@/containers/App/Documents'
// Layout
import { DocumentsWithLayout } from '@/containers/App/Documents'
import AppLayout from '@components/layout/AppLayout'

const DocumentsPage:DocumentsWithLayout = () => {
  return (
    <Documents/>
  )
}

DocumentsPage.layout = AppLayout;

export default DocumentsPage;

