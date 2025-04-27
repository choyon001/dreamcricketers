import logo from '../../assets/logo.png'
import { TbCoinFilled } from "react-icons/tb";
export default function Navbar({usercoin}) {
  return (
    <div className='w-10/12 mx-auto'>
        <div className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md  z-50">
            <div className="flex justify-between items-center mt-4 w-10/12 mx-auto">
                <img src={logo} alt="Logo" className='w-12' />

                <div className='sm:flex-col md:flex md:flex-row items-center gap-8'>
                    <ul className='sm:flex-col md:flex md:flex-row gap-8'>
                        <li className='text-gray-500 cursor-pointer'>Home</li>
                        <li className='text-gray-500 cursor-pointer'>Fixture</li>
                        <li className='text-gray-500 cursor-pointer'>Teams</li>
                        <li className='text-gray-500 cursor-pointer'>Schedules</li>
                    </ul>
                    <button className='border-solid border-2 rounded p-1'>
                        <span className='font-semibold flex gap-1 items-center'>
                            {usercoin} Coin <TbCoinFilled className='text-xl text-yellow-500'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div className="h-16"></div> 
    </div>
  )
}
