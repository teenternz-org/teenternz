const Career = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="mx-auto sm:my-20 my-16">
        <div className="md:text-xl text-lg m-16 font-semibold">We&apos;re Hiring</div>
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZ2-9cyqHvyp5HwHrqv-RvmBjSRWJav_sofKA8rP1mkaRPBg/viewform" target="_blank" rel="noreferrer"><button className="bg-gradient-to-r from-yellow-600 to-pink-600 text-white rounded-lg font-medium hover:scale-110 hover:shadow-xl hover:font-semibold transition-transform cursor-pointer mx-24 mt-8 shadow-md text-base p-2">
          Apply
        </button></a>
      </div>
      <div>
        <img src="/img/undraw_Updated_resume_re_q1or.svg" className="md:h-80 mx-auto md:my-36 sm:my-24 px-6 my-16" alt="" />
      </div>
    </div>
  )
}

export default Career
