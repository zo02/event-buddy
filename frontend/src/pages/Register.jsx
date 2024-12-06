import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";
import api from "../api"; // Konfiguracja API
import "../styles/Form.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    description: "",
    avatar_image: null,
  });

  const [loading, setLoading] = useState(false); // Obsługa stanu ładowania
  const [errors, setErrors] = useState({}); // Błędy z backendu
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

    // Tworzenie obiektu do przesyłania tylko username i password
    const dataToSend = {
      username: formData.username,
      password: formData.password,
    };

    try {
      // Wysyłanie danych do API
      await api.post("/api/register/", dataToSend);
      alert("Rejestracja zakończona sukcesem!");
      setErrors({});
      navigate("/login"); // Przekierowanie po udanej rejestracji
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors); // Ustaw błędy
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

        {/* Sekcja Avatar */}
        <div className="flex flex-col items-center mb-6">
          <label
            htmlFor="avatar_image"
            className="block text-sm font-bold text-slate-800 mb-2 text-center"
          >
            Avatar
          </label>
          <label
            htmlFor="avatar_image"
            className="relative w-32 h-32 bg-slate-300 rounded-full flex items-center justify-center cursor-pointer border-4 border-slate-800 hover:bg-slate-400 transition-all duration-300"
          >
            {formData.avatar_image ? (
              <img
                src={URL.createObjectURL(formData.avatar_image)}
                alt="Podgląd zdjęcia"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <PlusIcon className="w-10 h-10 text-white" />
            )}
            <input
              type="file"
              id="avatar_image"
              name="avatar_image"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

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

          {/* Imię i nazwisko */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-bold text-slate-800 mb-2">
                Imię
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź swoje imię"
              />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-bold text-slate-800 mb-2">
                Nazwisko
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="Wprowadź swoje nazwisko"
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

          {/* Opis */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-bold text-slate-800 mb-2">
              Opis
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={500}
              className="w-full px-3 py-2 h-32 rounded bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 resize-none"
              placeholder="Opisz siebie (maks. 500 znaków)"
            ></textarea>
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
