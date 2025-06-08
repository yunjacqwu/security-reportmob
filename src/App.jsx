import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CreateReport from './pages/CreateReport';
import Profile from './pages/Profile';
import Login from './pages/Login'; // ⬅️ Import Login.jsx

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ['/create', '/']; // ⬅️ Sembunyikan Header juga di halaman login

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main className={hideHeaderRoutes.includes(location.pathname) ? '' : 'pt-28'}>
        <Routes>
          <Route path="/" element={<Login />} /> {/* ⬅️ Login jadi root */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateReport />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
