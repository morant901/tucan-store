import { useEffect, useState } from "react";
import { Product } from "../services/ProductServices";
import { Link } from "react-router-dom";

const ListFavorites = () => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        const parsedFavorites = storedFavorites
            ? JSON.parse(storedFavorites)
            : [];

        if (Array.isArray(parsedFavorites)) setFavorites(parsedFavorites);
    }, []);

    if (favorites.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    No tienes favoritos 😢
                </h2>
                <p className="text-gray-500">
                    <Link to="/" className="hover:underline">
                        Agrega productos desde la tienda para verlos aquí.
                    </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-white-800 mb-6 text-center">
                ❤️ Tus Productos Favoritos
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {favorites.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
                            {product.title}
                        </h2>
                        <p className="text-sky-600 font-bold text-md">
                            ${product.price}
                        </p>
                        <p className="text-sm text-gray-500 italic">
                            {product.category}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListFavorites;
