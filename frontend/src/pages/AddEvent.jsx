import React, { useState } from "react";

function AddEvent() {
    const [formData, setFormData] = useState({
        title: "",
        details: "",
        date: "",
        location: "",
    });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null); // Przechowuje podgląd obrazka

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        if (uploadedFile) {
            setPreview(URL.createObjectURL(uploadedFile)); // Tworzenie URL podglądu
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        console.log("Uploaded File:", file);
        alert("Formularz został przesłany!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-stone-200">
            <div className="w-full max-w-md bg-slate-700 p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-center">Dodaj nowe wydarzenie</h1>
                <form onSubmit={handleSubmit}>
                    {/* Tytuł */}
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-bold mb-2 text-center"
                        >
                            Tytuł wydarzenia
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-stone-200 text-lg text-gray-700 shadow appearance-none hover:shadow-2xl hover:shadow-stone-200 transition-all duration-300"
                            placeholder="Wprowadź tytuł"
                            required
                        />
                    </div>

                    {/* Szczegóły */}
                    <div className="mb-4">
                        <label
                            htmlFor="details"
                            className="block text-sm font-bold mb-2 text-center"
                        >
                            Szczegóły
                        </label>
                        <textarea
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full h-32 px-3 py-2 rounded bg-stone-200 text-lg text-gray-700 shadow appearance-none hover:shadow-2xl hover:shadow-stone-200 transition-all duration-300"
                            placeholder="Wprowadź szczegóły wydarzenia"
                            required
                        ></textarea>
                    </div>

                    {/* Data */}
                    <div className="mb-4">
                        <label
                            htmlFor="date"
                            className="block text-sm font-bold mb-2 text-center"
                        >
                            Data wydarzenia
                        </label>
                        <input
                            type="datetime-local"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-stone-200 text-lg text-gray-700 shadow appearance-none hover:shadow-2xl hover:shadow-stone-200 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Lokalizacja */}
                    <div className="mb-4">
                        <label
                            htmlFor="location"
                            className="block text-sm font-bold mb-2 text-center"
                        >
                            Lokalizacja
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded bg-stone-200 text-lg text-gray-700 shadow appearance-none hover:shadow-2xl hover:shadow-stone-200 transition-all duration-300"
                            placeholder="Wprowadź lokalizację"
                            required
                        />
                    </div>

                    {/* Upload zdjęcia */}
                    <div className="mb-4">
                        <label
                            htmlFor="picture"
                            className="block text-sm font-bold mb-2 text-center"
                        >
                            Zdjęcie wydarzenia
                        </label>
                        <input
                            type="file"
                            id="picture"
                            name="picture"
                            onChange={handleFileChange}
                            className="w-full px-3 py-2 rounded bg-stone-200 text-lg text-gray-700 shadow appearance-none hover:shadow-2xl hover:shadow-stone-200 transition-all duration-300"
                        />
                    </div>

                    {/* Podgląd obrazka */}
                    {preview && (
                        <div className="mb-4 flex justify-center">
                            <img
                                src={preview}
                                alt="Podgląd obrazka"
                                className="w-48 h-36 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    )}

                    {/* Przycisk submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
                    >
                        Dodaj wydarzenie
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddEvent;
