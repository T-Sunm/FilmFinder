import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import Logo from '../../assets/movix-logo.png'
import { SwapDarkMode } from './SwapDarkMode';
import { ButtonSearch } from './ButtonSearch';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
    const numbers = [1, 2, 3, 4];
    const [toggleMenu, setToggleMenu] = useState(false);
    const MenuRef = useRef();
    const navigate = useNavigate();
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
    const [trans, setTrans] = useState('')
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 200) {
                setTrans(
                    'transition-all duration-700 bg-base-100 '
                );
            } else {
                setTrans('')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`navbar ${trans} fixed z-50 `}>
            <div className="navbar-start cursor-pointer" onClick={() => navigate("/")}>
                <img src={Logo} alt="" className='w-[50px] mobile:w-[30px]' />
                <a className="normal-case text-xl mobile:text-lg">FilmFinder</a>
            </div>
            <div className="navbar-end">
                <ButtonSearch />
            </div>
            <div >
                <div ref={MenuRef} className="relative">
                    <label className="btn btn-ghost btn-circle" onClick={() => setToggleMenu(!toggleMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <div className={`container-menu`} style={{ maxHeight: getHeight() }} >
                        <ul className={`menu menu-sm mt-3 z-[1] p-2 shadow  rounded-box w-52 `}>
                            <li><Link to={"/FilmFinder/movie"}>Movies</Link></li>
                            <li><Link to={"/FilmFinder/tv"}>TvShows</Link></li>
                            <li className=''><span>DarkMode <SwapDarkMode /></span> </li>
                        </ul>
                    </div>
                    <div className={`circleMenu ${toggleMenu ? '' : 'inActive'}`}></div>
                </div>
            </div>
        </div>
    )
}
