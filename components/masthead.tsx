import React, {FC} from 'react'
import Image from 'next/image'


const Masthead: FC = () =>  {

    return(
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src="/assets/bg-2.mp4" type="video/mp4" />
            </video>

            <div className='p-12 font-bold text-white 
            drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>App Storm</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Design, </span><span>done right.</span>
                </h2>
            </div>
        </div>
    )

}

export default Masthead