import React from 'react'

const Hero = () => {
  return (
    <>
      <section id='Hero'>

        {/* ---Hero container--- */}
        <div className="section-container mb-40 pt-16">
          <img src="./images/Musicx(Logo).png" alt="" className="mx-auto my-16 w-40" />
          <h3 className="mb-8 text-4xl font-bold md:text-5xl text-gray-700">
            The Global arena of singers
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-700">
            Musicx allow singers to collaborate each other to share ideas,
            and their innovations creativity around the world.
          </p>
          {/* ---Button container--- */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-3">
            <a href="#" className="animate-bounce md:mr-20 p-3 px-8 rounded-full shadow-lg bg-blue-600 duration-100 hover:opacity-80">
              Get started
            </a>
            <a href="#" className="p-3 px-8 rounded-full shadow-lg bg-cyan-600 duration-100 hover:opacity-80">
              Explore
            </a>
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero