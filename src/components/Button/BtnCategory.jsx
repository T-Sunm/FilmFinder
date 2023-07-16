import React from 'react'
import './CButtonTitle.css'
import { useSelector } from 'react-redux'
export const BtnCategory = ({ title }) => {
    const { theme } = useSelector((state) => state.theme)
    return (
        <div><a class={`codepen-button  ${theme === 'black' ? '' : 'active'} `}><span>{title}</span></a></div>
    )
}
