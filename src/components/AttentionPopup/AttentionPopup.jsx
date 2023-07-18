import React from 'react'
import './AttentionPopup.scss'
import Party from '../../assets/Party.png'
import ExclamationpointWhite from '../../assets/exclamation-pointWhite.png'
import Attention from '../../assets/Attention.png'
import { BiRightArrow } from 'react-icons/bi'
export const AttentionPopup = ({ show, setShow }) => {
    const hidePopup = () => {
        setShow(false);
    };
    return (
        <div className={`AttentionPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="attentionPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <div className='w-[100%] h-[100%] flex flex-col justify-start items-center relative'>
                    <div className=''>
                        <img src={Attention} className='w-[100px]' />
                    </div>
                    <div className='flex items-center'>
                        <img src={ExclamationpointWhite} className='w-[50px]' />
                        <h1>Pay attention to the surrounding sound to avoid background noise when recordinguse </h1>
                    </div>
                    <div className='Party'>
                        <img src={Party} />
                    </div>
                    <button className='flex glass p-5'>
                        Continue <BiRightArrow />
                    </button>
                </div>
            </div>
        </div>
    );
}
