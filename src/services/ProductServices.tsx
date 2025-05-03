export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export async function getProductList(): Promise<Product[]> {
    try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) throw new Error("Error al obtener los productos");
        return await response.json();
    } catch (error) {
        console.log(
            "%c Error al obtener los productos ",
            "background:red;color:white;",
            error
        );
        return [];
    }
}
export async function getCategories(): Promise<string[]> {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }
    return res.json();
}
