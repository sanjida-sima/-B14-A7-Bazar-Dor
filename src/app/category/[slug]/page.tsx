

'use client'

import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/ProductType";
// import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


type CategoryPageProps = {
    params : Promise <{
        slug: string;
}>;
};



const categoryNames:Record<string, {name:string; icon:string}> ={
 chal: {name: 'চাল',   icon: '🍚'},
    dal: {name: 'ডাল',  icon: '🫘'},
   tel: {name: 'তেল',  icon: '🫙'},
  sobji:  {name: 'সবজি',   icon: '🥔'},
   mach: {name: 'মাছ', icon: '🐟'},
   mangsho: {name: 'মাংস', icon: '🍗'},
   'dim-dudh': {name: 'ডিম-দুধ', icon: '🥚'},
   mashla: {name: 'মসলা',  icon: '🌶️'},
};




export default function CategoryPage({params} :CategoryPageProps){
    const [slug, setSlug]= useState('');
    // const slug = params.slug as string;
    const [ products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(' ');

    const [sort, setSort] = useState('default')


    // daata fetching

    useEffect(() => {
        params.then((data) => {
            setSlug(data.slug)
        });
    },[params])
        
    useEffect (() => {
        if(!slug) return;
        setLoading(true);
        setError('');
        setProducts([])
  
        fetch(`https://openapi.programming-hero.com/api/bazardor/categories=${slug}`)

        .then((res)=>{
            if(!res.ok){
                throw new Error('Faild to fetch')
            }
            return res.json();
        })
        .then((data)=>{
            if(Array.isArray(data)){
                setProducts(data);
            }
            else{
                throw  new Error('Invalid API data')
            }
        })
        .catch((err)=>{
            console.log('API ERROR:',err);
            setError('পণ্য লোড করা যাচ্ছে না!');
        })
        .finally(()=>{
            setLoading(false)
        });

    },[slug]);

    const sortedProducts = [...products].sort(( a , b) =>{
        if (sort === 'low-high'){
            return a.today - b.today;
        }
        if (sort === 'high-low')
           {
             return b.today - a.today;
           }
           return 0;
    }
)
const category = categoryNames[slug];
return(
    <main className="min-h-screen bg-[#f0f6f1]">
        <div className="mx-auto max-w-5xl px-4 py-8">
            
                {/* header */}
                <section className="mb-5 flex items-center gap-4 rounded-2xl border border-[#dfe8e0] bg-white p-5">

                    <span className="text-4xl">
                        {category?.icon || "🛒"}
                    </span>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-500">
                            {category?.name || "ক্যাটাগরি"}
                        </h1>
                        
                    </div>

            </section>

            <section className="mb-5 flex items-center justify-end gap-3 roundded-xl border border-[#dfe8e0] bg-white p-5 ">
               <label htmlFor="sort" className="text-sm text-gray-600">
                  সাজান
               </label>
               <select id="sort" value={sort} onChange={(e)=> setSort(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none">
                <option value="default">ডিফল্ট</option>
                <option value="low-high">দাম: কম থেকে বেশি</option>
                <option value="high-low">দাম: বেশি থেকে কম</option>
               </select>

            </section>
            {/* count */}
            {loading && (
                <p className="py-10 text-center text-gray-500">
                  পণ্য লোড হচ্ছে...  
                </p>
            )}

            {/* error */}
            {loading && error &&  (
                <p className="py-10 text-center text-red-500">
                    {error}
                </p>
            )}
            {/* empty */}
            {!loading && !error && products.length === 0 &&(
                <p className="rounded-xl bg-white p-10 text-center text-gray-500">
                    এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
                </p>
            )}
            {/* product */}
            {!loading && !error && products.length > 0 && (
                <div>
                    <p>
                        মোট{new Intl.NumberFormat('bn-BD').format(products.length)}টি পণ্য
                    </p>
                <div>
                    {sortedProducts.map((product) =>(

                        <ProductCard key={product.id}
                        product={product} />
                    ))}
                </div>
                </div>
            )}
        </div>
    </main>
)
    
}

