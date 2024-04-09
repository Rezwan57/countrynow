"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import './header.css'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import logo from '../images/logo.png';

const NavLinks = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'All Countries',
        path: '/countries'
    },
    {
        id: 3,
        title: 'About',
        path: '/about'
    },
    {
        id: 4,
        title: 'Contact',
        path: '/contact'
    }
]

function Header() {

    const pathname = usePathname();
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    };

    return (
        <header className='header'>

            <Link href="/" className='navLinkLogo'>
                <Image src="/logo.svg" alt="Logo" className='logo' width={60} height={50} />
            </Link>

            <ul className={` ${showMobileNav ? 'mobileNavVisible' : 'navUl'}`}>
                {NavLinks.map(({ id, title, path }) => (
                    <li key={id} className='navLi flex justify-center items-center'>
                        <Link href={path} className={`navLink ${pathname === path ? 'active' : ''}`}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='mobileNavButton'>

                <button type="button" onClick={toggleMobileNav}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

            </div>

        </header>
    )
}

export default Header;