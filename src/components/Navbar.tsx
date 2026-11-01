
'use client';

import Link from 'next/link';
import { UserRound, ChevronDown} from 'lucide-react'
import Image from 'next/image';

const categories = [
    {name: 'চাল', emoji: '🍚', slug: 'chal'},
    {name: 'ডাল', emoji: '🫘', slug: 'dal'},
    {name: 'তেল', emoji: '🛢️', slug: 'tel'},
    {name: 'সবজি', emoji: '🥬', slug: 'sobji'},
    {name: 'মাছ', emoji: '🐟', slug: 'mach'},
    {name: 'মাংস', emoji: '🍗', slug: 'murgi'},
    {name: 'ডিম-দুধ', emoji: '🥛', slug: 'dim-dudh'},
    {name: 'মসলা', emoji: '🌶️', slug: 'moshla'},
];

const Navbar = () => {
    return (
        <header className='sticky top-0 z-50 bg-white shadow-sm' >
        
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center justify-between py-3'>

                {/* logo  and web name*/}
                <Link href='/' className=' flex items-center gap-3' >
                <div className='bg-green-700 rounded-xl p-2'>
                    <Image  
                src='/logo-icon.png'
                alt='BazarDor logo'
                width={45}
                height={45}
                priority className='object-contain'
                />
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900'>
                        বাজার দর
                    </h1>
                    <p className='text-xs text-gray-500'>
                        মঙ্গলবার, ৬ অক্টোবর, ২০২৬
                    </p>
                </div>
                </Link>

                {/* profile */}
                <Link 
                href='/profile'
                className='flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition'
                >
                    <UserRound 
                    size={21}
                    className='text-green-700'
                    />
                    <span className='hidden sm:block text-sm font-medium text-gray-700'>
                          প্রোফাইল
                    </span>
                    <ChevronDown size={16} className='text-gray-500'/>

                </Link>



            </div>
            
        </div>
        {/* category-nav */}

        <div className='border-t border-gray-100'>
            <nav className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center gap-8 overflow-x-auto whitespace-nowrap py-3'>
                    {categories.map((category)=>(
                        <Link key={category.slug}
                        href={`/category/${category.slug}`}
                        className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors'>

                            <span className='text-lg'>
                                {category.emoji}
                            </span>
                            <span>
                                {category.name}
                            </span>

                        </Link>
                    ))}

                </div>
            </nav>

        </div>

        </header>
    );
};

export default Navbar;