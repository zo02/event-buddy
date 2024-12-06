import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserIcon, LockClosedIcon } from "@heroicons/react/solid";
import api from '../api'; 
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post('/api/token/', formData);
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      alert("Logowanie zakończone!");
      navigate('/');
    } catch (error) {
      alert("Błąd logowania: " + error.response?.data?.detail || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-stone-200 bg-opacity-90 rounded-lg shadow-lg shadow-stone-400">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Zaloguj się
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Pole nazwy użytkownika */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-bold text-slate-800 mb-2"
            >
              Nazwa użytkownika
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź nazwę użytkownika"
                required
              />
            </div>
          </div>

          {/* Pole hasła */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-slate-800 mb-2"
            >
              Hasło
            </label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź hasło"
                required
              />
            </div>
          </div>

          {/* Przycisk logowania */}
          <button
            type="submit"
            className={`w-full py-2 px-4 font-semibold rounded-lg transition-all duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-900 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>

        {/* Napis i odnośnik pod formularzem */}
        <p className="text-center text-sm text-slate-700 mt-6">
          Nie masz konta?{" "}
          <Link
            to="/register"
            className="text-slate-800 font-semibold underline hover:text-slate-900"
          >
            Zarejestruj się
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
