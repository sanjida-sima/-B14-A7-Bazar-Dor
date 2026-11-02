import { ProductType } from "@/types/ProductType";



type ProductCardProps = {
    product:ProductType;
};
const ProductCard = ({product} :ProductCardProps) => {

const change = Number(product.change?.pct ?? 0);


const getEmoji =()=>{
    if (product.categoryIcon)return product.categoryIcon;

    const category = product.category?.toLocaleLowerCase();


    const icons: Record<string,string> = {
        chal: '🍚',
        dal:'🫘',
        tel:'🫙',
        sobji:'🥔',
        mach:'🐟',
        mangsho:'🍗',
        "dim-dui":"🥚",
        moshla:'🌶️',

    };
    return icons [category || ''] || '🛒'
};


    return (
        <div className="rounded-2xl border border-[#dfe8e0] bg-[#fbfdfb] p-4  transition-all hover:shadow-md duration-300 hover:translate-y-1">
{/* information */}
            <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                    {getEmoji()}
                </div>
                
              <div className="min-w-0">
             <h3 className="text-lg font-bold text-gray-800">
                {product.nameBn}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
                প্রতি{product.unit || "একক"}
            </p>
           </div>

            </div>

          
           {/* price */}
            <div className="mt-4 flex items-end justify-between">
                <div>
                    <p className="mb-1 text-xs text-[#68756b]">
                       আজকের দাম 
                    </p>
                    <h2 className="text-xl font-bold text-gray-900">
                     {new Intl.NumberFormat('bn-BD').format(product.today)} 
                     <span className="ml-1 text-sm font-medium">টাকা</span>
                </h2>

                </div>
                {change !== 0 &&(
                     <span className={`rounded-full px-3 py-1  text-sm font-semibold ${change > 0 ? 'bg-red-50 text-red-600':
                    'bg-green-50 text-green-600'
                } `}>
                    {change > 0 ? '▲':'▼' }{' '} 
                    {new Intl.NumberFormat('bn-BD').format(
                        Math.abs(change)
                    )}%


                </span>

                )}
                
               
            </div>
            
        </div>
    );
};

export default ProductCard;