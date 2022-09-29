import React from 'react'

function MediaButtons({ onSelectMedia }: any) {
    return (
        <div className="flex flex-row gap-3 text-gray-500">
            <div className='rounded-l-md'>
                <button
                    className='text-2xl  hover:text-white transition duration-500 focus:text-white focus:border-b-2'
                    onClick={() => onSelectMedia({ movie: true, tv: true })}
                >All
                </button>
            </div>
            <div className='rounded-l-md'>
                <button
                    className='text-2xl hover:text-white transition duration-500 focus:text-white focus:border-b-2'
                    onClick={() => onSelectMedia({ movie: true, tv: false })}
                >Movies
                </button>
            </div>
            <div className='rounded-r-md'>
                <button
                    className='text-2xl hover:text-white transition duration-500 focus:text-white focus:border-b-2'
                    onClick={() => onSelectMedia({ movie: false, tv: true })}
                >Tv
                </button>
            </div>
        </div>
    )
}

export default MediaButtons