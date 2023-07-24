import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';

// Outlet을 통해 원하는 children 페이지로 대체됨
function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
