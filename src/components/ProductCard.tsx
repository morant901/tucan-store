import { Product } from "../services/ProductServices";

interface PropsProductCard {
    product: Product;
}
const ProductCard = ({ product }: PropsProductCard) => {
    const handleFavorites = () => {
        const favorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        ) as Product[];

        const productExist = favorites.some((fav) => fav.id === product.id);

        if (productExist) {
            const updatedFavorites = favorites.filter(
                (fav) => fav.id !== product.id
            );

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            alert("Producto Eliminado");
        } else {
            favorites.push(product);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Producto Agregado a Favoritos");
        }
    };
    return (
        <div className="productCardWrapper bg-white overflow-hidden p-4 transition hover:scale-105">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
                {product.title}
            </h2>
            <p className="text-blue-600 font-bold text-md">$ {product.price}</p>
            <p className="text-sm text-gray-500 italic">{product.category}</p>
            <button
                onClick={handleFavorites}
                className="mt-2 p-2 bg-yellow-500 text-white rounded cursor-pointer"
            >
                Agregar a favoritos
            </button>
        </div>
    );
};

export default ProductCard;
