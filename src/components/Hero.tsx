
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section className=" bg-[#f0f6f1] px-4 py-6 md:py-8">

             <div className="mx-auto max-w-5xl">
                {/* hero-card */}
                
                <div className="grid items-center gap-8 rounded-2xl border border-[#e1ebe3] bg-[#fbfdfb] px-5 py-8 shadoew-sm sm:px-8 md:grid-cols-[1.5fr_1fr] md:px-10 md:py-10">

                    {/* left */}
                    <div>
                        <span className="mb-4 inline-block rounded-full bg-[#e2f2e7] px-3 py-1.5 text-xs font-semibold text-green-700">
                            মঙ্গলবার, ৬ অক্টোবর, ২০২৬
                        </span>

                        <h1 className="mb-4 text-3xl font-bold leading-tight text-[#202b22] sm:text-4xl">
                            আজকের বাজারের দাম এক নজরে
                        </h1>
                        <p className="mb-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                        </p>
                        {/* btn */}
                        <Link
                        href='#products'
                        className="inline-flex items-center justify-center rounded-l-2xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
                        >
                            সব পণ্য দেখুন

                        </Link>
                    </div>

                    {/* right */}
                    <div className="flex items-center justify-center">
                        <Image 
                        src='/bazar-hero.png'
                        alt ='Basket of vegetables'
                        width={350}
                        height={280}
                        priority className="h-auto w-full max-width:280px object-contain max-width:330px "
                        />
                        
                    </div>

                </div>
            
        </div>

        </section>
       
    );
};

export default Hero;