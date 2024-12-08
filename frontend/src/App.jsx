import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AddEvent from './pages/AddEvent';
import Navbar from './components/Navbar';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-slate-700 to-gray-800">
        <Routes>
          {/* Strona główna bez potrzeby logowania */}
          <Route path="/" element={<Home />} />

          {/* Trasy wymagające logowania */}
          <Route path="/add-event" element={<ProtectedRoute><AddEvent /></ProtectedRoute>} />

          {/* Logowanie i rejestracja */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />

          {/* Obsługa błędu 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
