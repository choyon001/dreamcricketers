import React from 'react'
import BannerCenter from '../../assets/banner-main.png'
import BannerBg from '../../assets/BannerBg.jpg'
export default function Banner({claimcredit}) {
return (
    <div className='mt-8 w-10/12 mx-auto'>
            <div className='banner relative'>
                    <img src={BannerBg} alt="bg" className='rounded-lg h-[545px] w-full' />
                    <img src={BannerCenter} alt="banner" className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    <div className='banner-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white mt-5'>
                            <div className='mt-10'>
                            <h1 className='text-3xl font-bold whitespace-nowrap'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                            <p className='text-xl text-[rgba(255,255,255,0.7)]'>Beyond Boundaries Beyond Limits</p>
                            <div className='border-2 border-[rgba(231,254,41,1)] rounded-lg p-2 mt-5 inline-block'>
                                <button className='bg-[rgba(231,254,41,1)] p-2 rounded-lg text-black font-bold' onClick={()=>claimcredit()} >Claim Free Credit</button>
                            </div>
                            </div>
                    </div>
            </div>
            <div className='h-16'></div>
    </div>
)
}
