// RouteWrapper.js
import React from 'react';
import Layout from './Layout';

export default function RouteWrapper({ showSidebar, children }) {
  return <Layout showSidebar={showSidebar}>{children}</Layout>;
}
