import VJS_NavBar from '../../components/vanilla-js/vjs-navbar'

const Amers = () => {
  return (
    <>
      <VJS_NavBar />
    <div className="text-center mx-14 md:mx-24 lg:mx-48">
    <h1 className="text-4xl mt-8">AMers</h1>
    <div className="mt-8">
    <p>AMers is a versatile platform built to help people discover their passion, learn beyond frontiers and explore their interests. It connects you with experts in a variety of fields through services like Passion Sessions and Morning Meetups, allowing you to experience everything and anything.
                We are currently looking for volunteers.
                
                - Build connections with professionals as you&apos;ll have an opportunity to directly interact and communicate with them
                - Have experience for post-secondary applications and to put on your resume which can be verified through a guaranteed certificate
                - Surround yourself with skilled individuals from all over the world
                - Have access to all morning meetups and passion sessions
                
                No experience required! Our interest form takes about a minute to complete. We can&apos;t wait to see your application!
                
                We do not have a sign-up deadline, but we would prefer that you sign up as soon as you see this message. We&apos;d also appreciate it if you could forward the sign-up form to any colleagues or friends.
            </p>
        <h1 className="text-xl font-bold mt-4">We are Looking for:</h1>
        <p className="mt-2">- Volunteers</p>
        <div className="mt-2">
            <p className="font-medium m-4">
                Apply now:
            </p>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSclyQ2ZMIKJKUVDJMzQ6Zu7IRRXvD9qh2TyHnZW8aekxnM7Ew/viewform" rel="noreferrer" target="_blank">
                Register</a>
            </button>
        
            <button className="ml-4 bg-purple-200 p-2 rounded-md shadow-md">
            <a href="https://discoveramers.wixsite.com/amers" rel="noreferrer" target="_blank">
                Website</a>
            </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Amers
