import React from 'react'
import './BtnLoadmore.css'
export const BtnLoadmore = ({ onNext }) => {
    return (
        <button onClick={onNext}>
            <span>
                Load more
            </span>
        </button>
    )
}
