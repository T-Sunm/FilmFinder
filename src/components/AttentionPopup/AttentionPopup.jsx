import React, { useState } from 'react'
import './AttentionPopup.scss'
import Step1Attention from '../../assets/Step1Attention.png'
import ExclamationpointWhite from '../../assets/exclamation-pointWhite.png'
import Attention from '../../assets/Attention.png'
import { BiRightArrow } from 'react-icons/bi'
import Voice from '../../assets/Voice.png'
export const AttentionPopup = ({ show, setShow, setListen, startListening }) => {

    const [active, setActive] = useState(false)
    const hidePopup = () => {
        setShow(false);
        setActive(false)
        setListen(true)
        startListening()
    };

    return (
        <div className={`AttentionPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="attentionPlayer overflow-hidden">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                <div className={`w-[100%] h-[100%] flex flex-col justify-start items-center absolute transition-transform duration-100 ${active ? 'translate-x-[-600px]' : ''} `}>
                    <div className=''>
                        <img src={Attention} className='w-[100px]' />
                    </div>
                    <div className='flex items-center'>
                        <img src={ExclamationpointWhite} className='w-[50px]' />
                        <h1>Pay attention to the surrounding sound to avoid background noise when recordinguse </h1>
                    </div>
                    <div className='w-[60%]'>
                        <img src={Step1Attention} />
                    </div>
                    <button className='flex glass p-5' onClick={() => setActive(true)}>
                        Continue <BiRightArrow />
                    </button>
                </div>
                <div className={`w-[100%] h-[100%] absolute transition-transform duration-100 ${active ? '' : 'translate-x-[600px]'}`}>
                    <div className='flex justify-center w-full'>
                        <img src={Attention} className='w-[100px]' />
                    </div>
                    <div className='flex items-center'>
                        <img src={ExclamationpointWhite} className='w-[50px]' />
                        <h1>Use the mic to increase experience and accuracy </h1>
                    </div>
                    <div className='w-[70%]'>
                        <img src={Voice} />
                    </div>
                    <div className='absolute bottom-5 right-2' >
                        <button className=' flex glass p-5 active:scale-95 transition duration-150' onClick={hidePopup}>
                            I UNDERSTAND
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
