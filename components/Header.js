import Image from 'next/image';
import Logo from '../src/img/temp-logo.webp';

import IconMenu from '../src/svg/icon-menu.js';
import X from '../src/svg/icon-x.js';

import Link from 'next/link'
import { useState } from 'react';


const Header = (props) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navURLs = props.navURLs

    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        showMobileMenu ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden');
    }

    return (
        <>
            <header className="bg-white p-4 border-b border-slate-400 w-full">
                <div className="flex justify-between items-center mx-auto">
                    <Link href="/">
                        <Image
                            src={ Logo }
                            alt="Wade Street Capital Logo"
                            loading="eager"
                            layout="intrinsic"
                            className="hover:cursor-pointer"
                        />
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-row gap-3">
                        { navURLs.map(([title, url]) => (
                            <Link key={ url } href={ url }>
                                <a className="transition ease-in-out duration-250 text-slate-700 border border-slate-400 px-3 py-2 font-medium
                                hover:cursor-pointer hover:text-slate-50 hover:border-blue-700 hover:bg-blue-700
                                active:transition-none active:bg-blue-900 active:border-blue-900">{ title }</a>
                            </Link>
                        )) }
                    </nav>

                    {/* Mobile Menu Button */}
                    { showMobileMenu ?
                        <div className="md:hidden">
                            
                        </div>
                        :
                        <div className="md:hidden">
                            <IconMenu onClick={ handleMobileMenu } />
                        </div>
                    } 
                </div>
            </header>

            {/* Mobile Navigation */}
            {
                showMobileMenu ?
                <header className={"fixed top-0 left-0 bg-slate-50 w-screen h-screen md:hidden z-10 overscroll-none" }>
                    <div className="flex flex-col w-full h-full">
                        <div className="p-4 flex items-center justify-between border-b border-slate-400 w-full">
                            <Link href="/">
                                <Image
                                    src={ Logo }
                                    alt="Wade Street Capital Logo"
                                    loading="eager"
                                    layout="intrinsic"
                                    className="hover:cursor-pointer"
                                />
                            </Link>

                            <X onClick={ handleMobileMenu } />
                        </div>
                        <nav className="flex flex-col items-center justify-center flex-grow gap-6">
                            { navURLs.map(([title, url]) => (
                                <Link key={ url } href={ url }>
                                    <a className="text-3xl text-slate-700" onClick={ handleMobileMenu }>{ title }</a>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </header> : ''
            }
        </>
    )
}

export default Header;