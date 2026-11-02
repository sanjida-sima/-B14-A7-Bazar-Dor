import { ProductType } from "@/types/ProductType";



type ProductCardProps = {
    product:ProductType;
};
const ProductCard = ({product} :ProductCardProps) => {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-800">
                {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
                {product.category}/{product.unit}
            </p>
            <div className="mt-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                     ৳{new Intl.NumberFormat('bn-BD').format(product.price)}
                </h2>
                <span className={`rounded-full px-3 py-1  text-sm font-semibold ${product.priceChange > 0 ? 'bg-red-100 text-red-600'
                    :product.priceChange < 0 ? 'bg-green-100':'bg-gray-500'
                } `}>
                    {product.priceChange > 0 ? `▲ ${product.priceChange}%`:product.priceChange < 0 ? `▼ ${Math.abs(product.priceChange)}%`:'-'}


                </span>
            </div>
            
        </div>
    );
};

export default ProductCard;