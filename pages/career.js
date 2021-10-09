const Career = () => {
  return (
    <>
    <div className="text-2xl m-16 font-medium">
      Career at Teenternz
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <img src="/img/undraw_Updated_resume_re_q1or.svg" className="md:h-80 mx-auto px-6 my-12" alt="" />
      </div>
      <div className="mx-auto">
        <div className="md:text-xl text-lg mx-16 mb-12 font-semibold">We&apos;re Hiring</div>
        <div className="mx-20 mb-8 font-medium">Openings:</div>
        <div className="flex space-y-2 flex-col mx-20">
            <div>
              - Writing Intern
            </div>
            <div>
              - Graphis Design Intern
            </div>
            <div>
              - Interviewer
            </div>
            <div>
              - Software Developer Intern
            </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ2-9cyqHvyp5HwHrqv-RvmBjSRWJav_sofKA8rP1mkaRPBg/viewform" target="_blank" rel="noreferrer"><button className="bg-blue-500 text-white rounded-lg font-medium hover:scale-110 hover:shadow-xl hover:font-semibold transition-transform cursor-pointer mx-24 mt-8 shadow-md text-base p-2">
          Apply
        </button></a>
      </div>
    </div>
    </>
    
  )
}

export default Career
