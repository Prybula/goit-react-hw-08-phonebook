import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loading } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
