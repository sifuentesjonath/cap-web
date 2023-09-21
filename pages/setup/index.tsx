/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Setup from '@/containers/Setup';
import AppLayout from '@components/layout/AppLayout';

const SetupPage = props => {

  return (
    <Setup />
  );
};

SetupPage.layout = AppLayout;

export default SetupPage;
