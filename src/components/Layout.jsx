// src/components/Layout.jsx
import React from 'react';
import Header from './Header';

const Layout = ({ children, headerType }) => {
  let title;

  switch (headerType) {
    case 'login':
      title = 'Login to my account';
      break;
    case 'signup':
      title = 'Create new account';
      break;
    default:
      title = 'Todo App';
  }

  return (
    <div>
      <Header title={title} />
      {children}
    </div>
  );
};

export default Layout;
