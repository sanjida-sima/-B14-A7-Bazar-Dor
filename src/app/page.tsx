 
 'use client';
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/ProductType";

 import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')

  // data fetching

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/bazardor/products').then((res) =>{ 
      if (!res.ok){
        throw new Error ('Faild to fetch products')
      }
      return res.json();
    })
    .then((data) =>{
      console.log('FULL API DATA:',data);

      if (Array.isArray(data)){
        setProducts(data);
      }
      else{
        throw new Error ('Invalid API data')
      }
    })
    .catch((error)=>{
      console.log("API ERROR:",error)
      setError('পণ্য লোড করা যাচ্ছে না!')
    })
    .finally(() =>{
      setLoading(false);
    })
  },[]);

  //price increased
  const increasedProducts = products.filter(
    (product)=> Number(product.priceChange) > 0
  );

  // price decresed 

  const decreasedProducts = products.filter((product) => Number(product.priceChange) < 0);
   

  return (
   <main className="min-h-screen bg-[#f0f6f1]">
    <Hero />
     
     {/* loading */}
     {loading &&(
      <p className="py-10 text-center text-[#526354]">পণ্য লোড হচ্ছে...</p>
     )}

     {/* error */}
     {error && (
      <p className="py-10 text-center text-red-500">
        {error}
      </p>
     )}
     {!loading && ! error &&(
      <>
       {/* today price increased */}
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h2 className="mb-5 text-2xl font-bold text- [#25332a]">
        আজকের দাম বেড়েছে
      </h2>
      {increasedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {
        increasedProducts.map((product) =>(
       < ProductCard 
       key={product.id}
       product={product}
       />
      ))
      }

        </div>
      ):(
        <p className="text-sm text-gray-500">

            আজ কোনো পণ্যের দাম বাড়েনি।
        </p>
      )}

    </section>

      </>
     ) }


   
    {/* today price decrease */}
    <section className="mx-auto max-w-5xl px-4 py-8">
     <h2 className=" mb-5 text-2xl font-bold text-[#25332a]">
      আজকের দাম কমেছে
     </h2>
     {decreasedProducts.length > 0 ? (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {decreasedProducts.map((product) => (
          <ProductCard 
          key={product.id}
          product={product} />

        ))

        }

      </div>
     ) :(
      <p className="text-sm text-gray-500">
        আজ কোনো পণ্যের দাম কমেনি।

      </p>
     ) }
    </section>

    {/* all products */}
    <section id="products" className="mx-auto max-w-5xl px-4 py-8 scroll-mt-40">
      
      <h2 className="mb-5 text-2xl font-bold">সব পণ্য</h2>
      <p className="mb-5 text-sm text-[#758078]">
        মোট{
          new Intl.NumberFormat('bn-BD').format(products.length)
        }টি পণ্য দেখানো হচ্ছে
      </p>
      
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" >
          {products.map((product) =>(
            <ProductCard key={product.id} product={product}/>
        
       
      ))}
       </div>
    </section>

   </main>
  );
}
