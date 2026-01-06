export interface ProductSpecification {
    key: string;
    value: string;
}

export interface ProductReview {
    id: number;
    author: string;
    rating: number;
    date: string;
    text: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    currency: string;
    inStock: boolean;
    stockQuantity?: number;
    image: string;
    images?: string[]; // Array of image URLs
    category: string;
    specifications: ProductSpecification[];
    description?: string;
    reviews?: ProductReview[];
}
