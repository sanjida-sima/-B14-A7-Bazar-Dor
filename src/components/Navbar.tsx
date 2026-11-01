
'use client';

import Link from 'next/link';
import { UserRound, ChevronDown , Menu, X} from 'lucide-react'
import Image from 'next/image';
import { useState } from 'react';

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
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
                {/* profile Dropdown */}
                <div className='relative'>
                    <button onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className='flex items-center gap-2 rounderd-lg px-2 py-2 transition hover:bg-gray-50'
                        aaria-expanded ={isProfileOpen} 
                        aria-label='Open profile menu'
                        >
                            {/* profile image */}
                            <div className='flex h-9 w-9 items-center justify-between overflow-hidden rounded-full bg-gray-100'>
                                <UserRound  size={21} className='text-gray-600' />
                            </div>
                            <span className='hidden text-sm font-semibold text-gray-800 sm:block'>
                                Rezwan
                            </span>
                            <ChevronDown 
                            size={15} className={`text-gray-500 transition-transform ${isMenuOpen ? 'rotate-180':''}`}
                            />

                    </button>

                    {/* dropdown */}
                    {isProfileOpen &&(
                        <div className='absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-100 bg-white p-2 shadow-lg'>
                            <Link href='/profile' onClick={() => setIsProfileOpen(false)} className='block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                            My Profile

                            </Link>
                            <Link href='/update-profile'
                            onClick={()=>setIsProfileOpen(false)} className='block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                            Update Profile
                            </Link>
                            <Link href='/signin' onClick={()=>setIsProfileOpen(false)} className='block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                              Sign In
                            </Link>
                            <Link href='/signup' onClick={()=>setIsProfileOpen(false)} className='block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-green-50'>
                              Sign Up
                            </Link>

                        </div>
                    )}
                </div>
                {/* mobile button */}

                <button onClick={() =>setIsMenuOpen(!isMenuOpen)} className='ml-2 rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden' aria-label='Toggle menu'>


                    {isMenuOpen ? <X size = {22} /> : <Menu size={22} /> }
            
                </button>
            </div>
            
        </div>
        {/* category-nav */}

        <div className='border-b border-gray-100'>
            <nav className='max-w-7xl mx-auto hidden px-4 items-center justify-center gap-7 overflow-auto md:flex'>

                <div className='flex items-center gap-8 overflow-x-auto whitespace-nowrap py-3'>
                    {categories.map((category)=>(
                        <Link key={category.slug}
                        href={`/category/${category.slug}`}
                        className='flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-700 transition-colors'>

                            <span className='text-sm'>
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

        {/* mobile menu */}

        {isMenuOpen && (
            <div className='border-b border-gray-100 bg-white px-4 py-3 md:hidden'>

                {categories.map((category)=>(
                 
                 <Link key={category.slug}
                 href={`/category/${category.slug}`}
                 onClick={()=> setIsMenuOpen(false)} className='flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-green-50'>

                    <span>{category.emoji}</span>
                    <span>{category.name}</span>
                 </Link>

                )
                
                )}

            </div>
        )}

        </header>
    );
};

export default Navbar;