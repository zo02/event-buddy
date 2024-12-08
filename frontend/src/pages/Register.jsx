import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import api from "../api";
import "../styles/Form.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      avatar_image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataToSend = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    try {
      await api.post("/api/user/register/", dataToSend);
      alert("Rejestracja zakończona sukcesem!");
      setErrors({});
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Błąd:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-stone-200 bg-opacity-90 rounded-lg shadow-lg shadow-stone-400">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
          Zarejestruj się
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Pola użytkownika */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-slate-800 mb-2">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź nazwę użytkownika"
                required
              />
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-2">
                Adres email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź adres email"
              />
            </div>
          </div>

          {/* Hasła */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="password" className="block text-sm font-bold text-slate-800 mb-2">
                Hasło
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź hasło"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-slate-800 mb-2">
                Powtórz hasło
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Powtórz hasło"
              />
            </div>
          </div>

          {/* Przycisk */}
          <button
            type="submit"
            className={`w-full py-2 px-4 font-semibold rounded-lg transition-all duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-900 text-white"
            }`}
            disabled={loading}
          >
            {loading ? "Rejestracja..." : "Zarejestruj się"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-700 mt-6">
          Masz już konto?{" "}
          <Link
            to="/login"
            className="text-slate-800 font-semibold underline hover:text-slate-900"
          >
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
