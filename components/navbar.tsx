import type { NextPage } from 'next'

const NavBar: NextPage = () => {
  return (
    <>
			<div>
				<div className="mx-auto w-full bg-pink-200 shadow-lg flex static">
							<div className="p-4 text-lg justify-items-start">
                            <img src="/svgs/teenternz.svg" alt="Teenternz" className="cursor-pointer"/>
								</div>
					<div className="flex flex-1 px-20 space-x-6">
							<div className="p-4 text-lg cursor-pointer">
								<a href="#">Blogs</a>
								
							</div>
							<div className="p-4 text-lg cursor-pointer">
							<a href="#">Events</a>
							</div>
							<div className="p-4 text-lg cursor-pointer">
							<a href="#">Contact</a>
							</div>
					</div>
					</div>

				</div>
				
		</>
  )
}

export default NavBar