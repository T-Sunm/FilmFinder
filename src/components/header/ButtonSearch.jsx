import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { AiOutlineAudioMuted } from 'react-icons/ai'
import { AttentionPopup } from '../AttentionPopup/AttentionPopup';


export const ButtonSearch = () => {
    // define "lord-icon" custom element with default properties
    defineElement(lottie.loadAnimation);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [listen, setListen] = useState(false);
    const [show, setShow] = useState(false)
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // Cụ thể, hàm searchQueryHandler được gán cho sự kiện onKeyUp. 
    //onKeyUp là một sự kiện được kích hoạt 
    //khi người dùng nhả một phím nào đó sau khi đã nhấn xuống.

    //Hàm searchQueryHandler sẽ được gọi mỗi lần người dùng nhả một phím, 
    //và sẽ nhận một đối tượng sự kiện (event) làm đối số. 
    //Đối tượng này có một thuộc tính key chứa thông tin về phím vừa được nhả.
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            // sài navigate để click vào chuyển hướng trang
            navigate(`/search/${query}`)
        }
    }
    useEffect(() => {
        setQuery(transcript);
    }, [transcript]);


    if (!browserSupportsSpeechRecognition) {
        return null
    }

    const handleListen = () => {
        if (!listen) {
            setShow(true)
            setListen(!listen);
        } else {
            setListen(false);
            SpeechRecognition.stopListening();
        }
    }

    return (
        <>
            <div className={`${toggleSearch ? "w-[300px]" : 'w-[40px]'} relative h-[40px] rounded-[40px] overflow-hidden  border `} style={{ transition: 'width 0.5s' }}>
                <button className="w-[40px] h-[40px] rounded-full flex justify-center items-center"
                    style={{ backgroundColor: `hsl(var(--b2) / var(--tw-bg-opacity))` }}
                    onClick={() => setToggleSearch(!toggleSearch)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className='relative w-[220px] h-[40px] bottom-10 left-[60px] flex justify-center items-center ' >
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full absolute h-full outline-none border-none bg-transparent'
                        onKeyUp={searchQueryHandler}
                        value={query}
                    />

                </div>
                <div
                    className={`absolute right-0 -top-1 ${toggleSearch ? "block" : 'hidden'} cursor-pointer`}
                    onClick={handleListen}
                >
                    {listen ?
                        <button className='absolute right-3 top-2' ><AiOutlineAudioMuted size={30} /></button>
                        :
                        <lord-icon
                            src="https://cdn.lordicon.com/fpipqhrr.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#e8308c"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    }

                </div>
            </div>
            <AttentionPopup
                show={show}
                setShow={setShow}
            />
        </>
    )
}
