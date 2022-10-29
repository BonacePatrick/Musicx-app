import React from 'react'

const Features = () => {
  return (
    <>
        <section id="Features">
            <div className="section-container my-20 ">
                <div className="relative flex flex-col md:flex-row md:space-x-32">
                    {/* ---images--- */}
                       <div className='md:w-1/2'>
                            <img src="./images/image-computer.png" alt="computer" className='md:absolute top-0 right-[50%]' />
                       </div> 

                    {/* ---items container--- */}
                    <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                        {/* ---item 1-- */}
                        <div>
                            <h5>
                                Quick search
                            </h5>
                            <p className="mx-md text-gray-700">
                                Easily search your favorite musician across the world.
                            </p>
                        </div>
                        {/* ---item 2--- */}
                        <div>
                            <h5>
                                Secure chart
                            </h5>
                            <p className="mx-md text-gray-700">
                                you can chat with a favorite musician securely.
                            </p>
                        </div>
                        {/* ----item 3--- */}
                        <div>
                            <h5>
                                Sell your creative song
                            </h5>
                            <p className="mx-md text-gray-700">
                                You can sell your written songs to others in your carrier.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Features