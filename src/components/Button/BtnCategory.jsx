import React from 'react'
import './CButtonTitle.css'
import { useSelector } from 'react-redux'
export const BtnCategory = ({ title }) => {
    const { theme } = useSelector((state) => state.theme)
    return (
        <div className='mobile:flex mobile:justify-center mobile:items-center'>
            <a className={`codepen-button  ${theme === 'black' ? '' : 'active'} `}>
                <span>{title}</span>
            </a>
        </div>
    )
}
