import React from 'react'
import LoadingSkeleton from '../Loading/LoadingSkeleton'

export const CateGoryItemLoading = () => {
    return (
        <div className='hover:cursor-pointer duration-300 hover:scale-95 rounded-xl bg-[#1F1F1F] p-3 h-fit text-white w-[200px]'>
            <div className='w-[100%] h-[100%]'>
                <div className='w-[100%] h-[190px] mb-2'>
                    <LoadingSkeleton className='w-[100%] h-[100%] mb-2 rounded-xl' />
                </div>
                <LoadingSkeleton className='w-full h-[40px] rounded-xl' />
            </div>
        </div>
    )
}
