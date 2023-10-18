import './Layout.css'

import React from 'react';
import SidebarComponent from '../sidebar/Sidebar';

export default function Layout({ showSidebar, children }) {
  return (
    <div className="layout">
      {showSidebar && <SidebarComponent />}
      <main className="content">{children}</main>
    </div>
  );
}
