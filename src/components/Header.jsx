import React from 'react'

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full py-2 px-4 flex justify-between items-center z-50">

            <img src="./bcas.png" alt="BCAS Logo" className='w-24' />

            {/* <nav>
                <ul className="flex gap-8 text-white font-medium text-xl font-poppins items-center">
                    <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#events" className="hover:text-gray-300">Events</a></li>
                    <li><a href="#registration" className="hover:text-gray-300">Registration</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav> */}
            <img src="./fpc.png" alt="FBC Logo" className='w-45' />

        </header>
    )
}

export default Header