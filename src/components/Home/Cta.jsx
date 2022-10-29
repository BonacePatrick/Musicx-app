import React from 'react'

const Cta = () => {
  return (
    <>
    <section id="cta">
        <div className="section-container my-20">
            <h3 className='section-heading'>Musicx for IOS and Android</h3>
            <p className="section-content mb-10">
                Now Musicx app is available on App store and Play store for free you can boost your music carrier productivity.
            </p>
            {/* --button container-- */}
            <div className="button-container">
            <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-3">
            <a href="#" className="animate-bounce md:mr-20 p-3 px-8 rounded-full shadow-lg bg-blue-600 duration-100 hover:opacity-80">
              Download for IOS
            </a>
            <a href="#" className="animate-bounce p-3 px-8 rounded-full shadow-lg bg-cyan-600 duration-100 hover:opacity-80">
              Download for Android
            </a>
          </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cta