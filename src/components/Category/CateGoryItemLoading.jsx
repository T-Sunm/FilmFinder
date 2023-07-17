import React from 'react'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

export const CateGoryItemLoading = () => {
    return (
        <div className='hover:cursor-pointer duration-300 hover:scale-95 rounded-xl bg-[#1F1F1F] p-3 h-[100%] text-white w-[100%]'>
            <div className='w-[100%] h-[100%]'>
                <div className='w-[100%] h-[80%] mb-2'>
                    <LoadingSkeleton className='w-[100%] h-[100%] mb-2 rounded-xl' />
                </div>
                <LoadingSkeleton className='w-full h-[20%] rounded-xl' />
            </div>
        </div>
    )
}
