import { useState } from 'react';
import ProductCard from './product-card';

export default function RandomProduct() {
    const [product, setProduct] = useState(null);

    const getRandomProduct = async () => {
        const randomId = Math.floor(Math.random() * 20) + 1;

        const response = await fetch(
            `https://fakestoreapi.com/products/${randomId}`
        );

        const data = await response.json();

        setProduct(data);
    };

    return (
        <div className="flex flex-col items-center gap-5 p-5">

            <button
                onClick={getRandomProduct}
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
            >
                Fetch
            </button>

            {product && (
                <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                    category={product.category}
                    rating={product.rating}
                />
            )}

        </div>
    );
}