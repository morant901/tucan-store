import { ChangeEvent } from "react";

interface FiltersProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
    categories: string[];
}

function Filters({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    categories,
}: FiltersProps) {
    return (
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onSearchChange(e.target.value)
                }
                className="border p-2 rounded w-full sm:w-1/2"
            />

            <select
                value={selectedCategory}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    onCategoryChange(e.target.value)
                }
                className="border p-2 rounded w-full sm:w-1/4"
            >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat === "all" ? "Todas las categorías" : cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filters;
