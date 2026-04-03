import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/Landing';
import { Login } from './pages/Login';
import { AdminLayout } from './layouts/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { Users } from './pages/admin/Users';
import { Apps } from './pages/admin/Apps';
import { Orders } from './pages/admin/Orders';
import { FactorySettings } from './pages/admin/FactorySettings';
import { Content } from './pages/admin/Content';
import { Finance } from './pages/admin/Finance';
import { Dict } from './pages/admin/Dict';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="apps" element={<Apps />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          {/* New Routes */}
          <Route path="settings" element={<FactorySettings />} />
          <Route path="content" element={<Content />} />
          <Route path="finance" element={<Finance />} />
          <Route path="dict" element={<Dict />} />
        </Route>
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
