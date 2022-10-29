import React from 'react'

const SuperCharge = () => {
  return (
    <>
    <section id="supercharge">
        <div className="section-container my-20">
            <h3 className='section-heading'>SuperCharge your workflow</h3>
            <p className="section-content">
                We've got tools to boost your productivity.
            </p>
            {/* --items container--- */}
            <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                {/* ---item 1-- */}
                <div className="flex flex-col items-center space-y-5">
                    <img src="./images/meeting.png" alt="" className="mb-6 " />
                    <h5>Meet with your Favorite Musician</h5>
                    <p className="mx-w-md text-gray-700">
                        You can Meet with your favorite musicians across the world face to face. 
                    </p>
                </div>
                {/* ---item 2-- */}
                <div className="flex flex-col items-center space-y-5">
                    <img src="./images/securlly.png" alt="" className="mb-6" />
                    <h5>Sell your contents Securely</h5>
                    <p className="mx-w-md text-gray-700">
                        You can sell your creative contents in securely ways. 
                    </p>
                </div>
                {/* ---item 3-- */}
                <div className="flex flex-col items-center space-y-5">
                    <img src="./images/advert.png" alt="" className="mb-6" />
                    <h5>Advert your Creativity contents</h5>
                    <p className="mx-w-md text-gray-700">
                        You can extremely advertize your contents on all social media in a sec. 
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SuperCharge