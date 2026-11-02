 
 'use client';
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/ProductType";

 import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/bazardor/products').then((res) => res.json())
    .then((data) =>{
      console.log('FULL API DATA:',data);
      setProducts(data);
    })
    .catch((error)=>{
      console.log("API ERROR:",error)
    });
  },[]);
   

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
      
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" >
          {products.map((product) =>(
            <ProductCard key={product.id} product={product}/>
        
       
      ))}
       </div>
    </section>

   </main>
  );
}
