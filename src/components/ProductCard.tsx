import { useState, useEffect } from "react";
import { Product } from "../services/ProductServices";

interface PropsProductCard {
    product: Product;
}

const ProductCard = ({ product }: PropsProductCard) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        ) as Product[];

        const exists = favorites.some((fav) => fav.id === product.id);
        setIsFavorite(exists);
    }, [product.id]);

    const handleFavorites = () => {
        setIsLoading(true);

        setTimeout(() => {
            const favorites = JSON.parse(
                localStorage.getItem("favorites") || "[]"
            ) as Product[];

            const exists = favorites.some((fav) => fav.id === product.id);

            if (exists) {
                const updatedFavorites = favorites.filter(
                    (fav) => fav.id !== product.id
                );
                localStorage.setItem(
                    "favorites",
                    JSON.stringify(updatedFavorites)
                );
                setIsFavorite(false);
                setMessage("Eliminado de favoritos");
            } else {
                favorites.push(product);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                setIsFavorite(true);
                setMessage("Agregado a favoritos");
            }

            setIsLoading(false);

            setTimeout(() => setMessage(""), 2000);
        }, 500);
    };

    return (
        <div className="productCardWrapper relative bg-white overflow-hidden p-4 transition hover:scale-105 rounded shadow">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
            </h2>
            <p className="text-sky-600 font-bold text-md">${product.price}</p>
            <p className="text-sm text-gray-500 italic">{product.category}</p>

            <button
                onClick={handleFavorites}
                disabled={isLoading}
                className={`mt-2 p-2 w-full rounded text-white transition ${
                    isFavorite ? "bg-rose-600" : "bg-sky-500"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {isLoading
                    ? "Agregando..."
                    : isFavorite
                    ? "Eliminar de favoritos"
                    : "Agregar a favoritos"}
            </button>

            {message && (
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-3 py-1 rounded shadow">
                    {message}
                </div>
            )}
        </div>
    );
};

export default ProductCard;
