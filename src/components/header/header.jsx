import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import Logo from '../../assets/movix-logo.png'
import { SwapDarkMode } from './SwapDarkMode';
import { ButtonSearch } from './ButtonSearch';
export const Header = () => {
    const numbers = [1, 2, 3, 4];
    const [toggleMenu, setToggleMenu] = useState(false);
    const MenuRef = useRef();
    const getHeight = () => {
        return toggleMenu ? numbers.length * 50 + 'px' : '0';
    };
    useEffect(() => {
        let handler = (e) => {
            if (!MenuRef.current.contains(e.target)) {
                setToggleMenu(false);
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [])


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div ref={MenuRef} >
                    <label className="btn btn-ghost btn-circle" onClick={() => setToggleMenu(!toggleMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <div className={`container-menu ${toggleMenu ? 'active' : 'inactive'}`} style={{ maxHeight: getHeight() }}  >
                        <ul className={`menu menu-sm mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}>
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                            <li className=''><a>DarkMode <SwapDarkMode /></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-center cursor-pointer">
                <img src={Logo} alt="" className='w-[50px]' />
                <a className="normal-case text-xl">FilmFinder</a>
            </div>
            <div className="navbar-end">
                <ButtonSearch />
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}
