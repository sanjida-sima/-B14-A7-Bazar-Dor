import Hero from "@/components/Hero";

export default function Home() {
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
      {/* all product will here */}
    </section>

   </main>
  );
}
