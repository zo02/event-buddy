import React from "react";
import Button from "../components/Button"; // Upewnij się, że ścieżka do Button jest poprawna

function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-transparent text-stone-200">
            {/* Sekcja powitalna */}
            <h1 className="text-9xl font-bold text-center mb-8">Witaj w EventBuddy!</h1>
            <p className="text-lg text-stone-300 text-center mb-6">
                Twoje kompleksowe rozwiązanie do zarządzania wydarzeniami, ogłoszeniami i programami.
            </p>

            {/* Przycisk: Dodaj wydarzenie, Przeglądaj wydarzenia, Dołącz teraz */}
            <div className="flex space-x-6 mt-6">
                {/* Dodaj wydarzenie */}
                <Button text="Dodaj wydarzenie" to="/add-event" icon={true} />

                {/* Przeglądaj wydarzenia */}
                <Button text="Przeglądaj wydarzenia" to="/events" icon={true} />

                {/* Dołącz teraz */}
                <Button text="Dołącz teraz" to="/register" icon={true} />
            </div>
        </div>
    );
}

export default Home;
