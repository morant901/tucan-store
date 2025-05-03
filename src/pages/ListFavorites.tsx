import { useEffect, useState } from "react";
import { Product } from "../services/ProductServices";

const ListFavorites = () => {
    const [favorites, setFavorites] = useState<Product[]>([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        const parsedFavorites = storedFavorites
            ? JSON.parse(storedFavorites)
            : [];

        if (Array.isArray(parsedFavorites)) setFavorites(parsedFavorites);
    }, []);

    if (favorites.length === 0) return <p>No tienes favoritos</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {favorites.map((product) => (
                <div className="ListFavoritesWrapper bg-white overflow-hidden p-4 transition hover:scale-105">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-contain mb-4"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">
                        {product.title}
                    </h2>
                    <p className="text-blue-600 font-bold text-md">
                        $ {product.price}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                        {product.category}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ListFavorites;
