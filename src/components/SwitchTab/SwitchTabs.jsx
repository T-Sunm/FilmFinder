import React, { useState } from 'react'

export const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)
    const activeTab = (tab, index) => {
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedTab(index)
        }, 300)
        onTabChange(tab)
    }
    return (
        <div className='bg-primary-content rounded-[20px] p-1 overflow-hidden '>
            <div className='relative h-[30px] z-10 flex justify-center items-center '>
                {
                    data.map((tab, index) => (
                        <div key={index}>
                            <span
                                className={`block w-[100px] h-[100%] text-center cursor-pointer transition duration-300 relative z-10
                                    ${selectedTab === index ? "text-white font-bold" : "text-black"}
                        `}
                                onClick={() => activeTab(tab, index)}>
                                {tab}
                            </span>
                        </div>
                    ))
                }
                <div className={`bg-gradient-to-r from-yellow-500 to-pink-600 w-[100px] h-full absolute rounded-[20px]`} style={{ left: left, transition: 'left 0.4s cubic-bezier(0.88, -0.35, 0.565, 1.35)' }}>
                </div>
            </div>

        </div>
    )
}
