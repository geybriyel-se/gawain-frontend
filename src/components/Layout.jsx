// Layout.js
import React from 'react';
import SidebarComponent from './SidebarComponent';

export default function Layout({ showSidebar, children }) {
  return (
    <div className="layout">
      {showSidebar && <SidebarComponent />}
      <main className="content">{children}</main>
    </div>
  );
}
