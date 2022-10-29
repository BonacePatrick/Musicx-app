import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-50 py-10">
        <div className="section-container">
            <div className="flex flex-col items-center justify-between md:flex-row">
                {/* ---logo--- */}
                <img src="./images/Musicx(Logo).png" alt="" className="scale-50 w-40" />
                {/* --container for Menu and socials--- */}
                <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-gray-700">
                    {/* --Menus --- */}
                    <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                        {/* ---Menu 1--- */}
                        <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:blue-700">FAQ</a></div>
                            <div><a href="#" className="hover:blue-700">Service</a></div>
                            <div><a href="#" className="hover:blue-700">Contact</a></div>
                        </div>
                         {/* ---Menu 2--- */}
                         <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:blue-700">Privacy</a></div>
                            <div><a href="#" className="hover:blue-700">Policy</a></div>
                            <div><a href="#" className="hover:blue-700">Support</a></div>
                        </div>
                         {/* ---Menu 3--- */}
                         <div className="flex flex-col space-y-4 text-center md:text-left">
                            <div><a href="#" className="hover:blue-700">Install Guide</a></div>
                            <div><a href="#" className="hover:blue-700">About Us</a></div>
                            <div><a href="#" className="hover:blue-700">Updates</a></div>
                        </div>
                    </div>
                    {/* --social media--- */}
                    <div className="flex justify-between w-32 py-1">
                        <a href="#"><img src="./images/icon-facebook.svg" alt="" className="duration-200 ficon" /></a>
                        <a href="#"><img src="./images/icon-instagram.svg" alt="" className="duration-200 ficon" /></a>
                        <a href="#"><img src="./images/icon-twitter.svg" alt="" className="duration-200 ficon" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer