import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-800 text-stone-200 p-4 shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold hover:text-blue-500 transition-all">
                    EventBuddy
                </Link>

                {/* Linki nawigacyjne */}
                <div className="flex space-x-6">
                    <Link
                        to="/"
                        className="text-lg font-semibold hover:text-blue-500 transition-all"
                    >
                        Strona główna
                    </Link>

                    <Link
                        to="/add-event"
                        className="text-lg font-semibold hover:text-blue-500 transition-all"
                    >
                        Dodaj wydarzenie
                    </Link>

                    <Link
                        to="/login"
                        className="text-lg font-semibold hover:text-blue-500 transition-all"
                    >
                        Zaloguj się
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
