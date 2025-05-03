// src/components/Filters/Filters.tsx
import { useState, useEffect } from "react";
import { filterProducts } from "./filterUtils";
import { Product, getCategories } from "../../services/ProductServices";

interface Props {
    products: Product[];
    onFilter: (filteredProducts: Product[]) => void;
}

const Filters = ({ products, onFilter }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        getCategories()
            .then((data) => setCategories(["all", ...data])) // Añadir "all" para permitir mostrar todos los productos
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleApplyFilters = () => {
        const filtered = filterProducts(products, searchTerm, selectedCategory);
        onFilter(filtered);
    };

    return (
        <div className="flex gap-4 mb-6">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por nombre"
                className="border p-2 rounded"
            />
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border p-2 rounded bg-gray-50 text-black"
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <button
                onClick={handleApplyFilters}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Filtrar
            </button>
        </div>
    );
};

export default Filters;
