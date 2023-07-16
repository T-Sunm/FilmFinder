import React from 'react'
import './BtnLoadmore.css'
export const BtnLoadmore = ({ onNext }) => {
    return (
        <button onClick={onNext} className='Loadmore'>
            <span>
                Load more
            </span>
        </button>
    )
}
