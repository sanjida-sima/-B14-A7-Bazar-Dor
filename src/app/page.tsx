 
 'use client';

import { ProductType } from "@/types/ProductType";

 import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() =>{
    fetch(' https://api.api-store.workers.dev/api/bazardor')
    .then((res)=> res.json())
    .then((data) =>{
      console.log("API RESPONSE:",data);
      setProducts(data.data);
    })
      .catch((error)=>console.log("API ERROR:",error));


  }, []);
  return (
   <main className="min-h-screen bg-[#f0f6f1]">
    <Hero />
    {/* today price increased */}
    <section className="mx-auto max-w-5xl px-4 py-8">
      {/* product section will come here */}

    </section>

    {/* today price decrease */}
    <section className="mx-auto max-w-5xl px-4 py-8">
      {/* product section will come here */}
    </section>

    {/* all products */}
    <section id="products" className="mx-auto max-w-5xl px-4 py-8 scroll-mt-40">
      
      <h2 className="mb-5 text-2xl font-bold">সব পণ্য</h2>
      { Array.isArray(products)&& products.map((product) =>(
        <div key={product.id}>
          {product.name}

        </div>
      ))}
    </section>

   </main>
  );
}
