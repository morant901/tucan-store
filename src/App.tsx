// src/App.tsx
import { useState, useEffect } from "react";
import { getProductList, Product } from "./services/ProductServices";
import ProductCard from "./components/ProductCard";
import Filters from "./components/filters/Filters";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getProductList()
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data); // Inicialmente, muestra todos los productos
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleFilter = (filteredProducts: Product[]) => {
        setFilteredProducts(filteredProducts);
    };

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Productos Tucan</h1>

            <Filters products={products} onFilter={handleFilter} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default App;
