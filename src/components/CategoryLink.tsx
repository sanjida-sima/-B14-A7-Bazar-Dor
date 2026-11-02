import { Link } from "lucide-react";



const categories = [
    {name: 'চাল', slug: 'chal', icon: '🍚'},
    {name: 'ডাল', slug: 'dal', icon: '🫘'},
    {name: 'তেল', slug: 'chal', icon: '🫙'},
    {name: 'সবজি', slug: 'chal', icon: '🥔'},
    {name: 'মাছ', slug: 'chal', icon: '🐟'},
    {name: 'মাংস', slug: 'chal', icon: '🍗'},
    {name: 'ডিম-দুধ', slug: 'chal', icon: '🥚'},
    {name: 'মসলা', slug: 'chal', icon: '🌶️'},
]


const CategoryLink = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 py-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-clos-4">
                {categories.map((category) =>(
                <Link
                key={category.slug}

                href={`/category/${category.slug}`} className="flex items-center gap-3 rounded-xl border border-[#dfe8e0] bg-white p-4 transition hover:bg-green-50 hover:shadow-sm" >


               <span className="text-2xl">
                    {category.icon}
                </span>

                <span className="font-semibold text-gray-800">
                    {category.name}
                </span>


                </Link>
                 
               ) )}
            
        </div>
        </section>
    );
};

export default CategoryLink;