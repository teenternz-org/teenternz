import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-36">
      <div className="grid grid-cols-5">
        <div className="mx-6 md:block hidden">
          <img src="/img/footer.svg" className="h-36 w-36" alt="" />
        </div>
        <div className=" md:col-span-4 col-span-5 md:flex hidden flex-1 md:pt-0 my-auto md:space-x-6 justify-center md:justify-end mx-16">
          <Link href="/about" passHref><div className="text-base p-2 text-white font-normal cursor-pointer">About Us</div></Link>
          <Link href="/career" passHref><div className="text-base p-2 text-white font-normal cursor-pointer">Career</div></Link>
          <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><radialGradient id="La9SoowKGoEUHOnYdJMSEa" cx="24" cy="10.009" r="32.252" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#8c9eff"/><stop offset=".368" stopColor="#889af8"/><stop offset=".889" stopColor="#7e8fe6"/><stop offset="1" stopColor="#7b8ce1"/></radialGradient><path fill="url(#La9SoowKGoEUHOnYdJMSEa)" d="M40.107,12.15c-0.065-0.102-0.139-0.182-0.236-0.255c-0.769-0.578-4.671-3.339-9.665-3.875	c-0.01-0.001-0.048-0.003-0.057-0.003c-0.098,0-0.183,0.057-0.224,0.14l-0.269,0.538c0,0-0.001,0-0.001,0	c-0.017,0.033-0.026,0.071-0.026,0.111c0,0.109,0.07,0.202,0.168,0.236c0.006,0.002,0.048,0.011,0.063,0.014	c4.267,1.028,6.863,2.89,9.149,4.945c-4.047-2.066-8.044-4.001-15.009-4.001s-10.961,1.936-15.009,4.001	c2.286-2.055,4.882-3.917,9.149-4.945c0.015-0.004,0.057-0.012,0.063-0.014c0.098-0.034,0.168-0.127,0.168-0.236	c0-0.04-0.009-0.078-0.026-0.111c0,0-0.001,0-0.001,0l-0.269-0.538c-0.041-0.083-0.125-0.14-0.224-0.14	c-0.009,0-0.048,0.002-0.057,0.003c-4.994,0.536-8.896,3.297-9.665,3.875c-0.097,0.073-0.17,0.153-0.236,0.255	c-0.708,1.107-5.049,8.388-5.892,21.632c-0.009,0.142,0.04,0.289,0.135,0.395c4.592,5.144,11.182,5.752,12.588,5.823	c0.167,0.008,0.327-0.065,0.427-0.199l1.282-1.709c0.1-0.134,0.046-0.322-0.111-0.379c-2.705-0.986-5.717-2.7-8.332-5.706	C11.231,34.457,16.12,37,24,37s12.769-2.543,16.009-4.993c-2.616,3.006-5.627,4.719-8.332,5.706	c-0.157,0.057-0.211,0.245-0.111,0.379l1.282,1.709c0.101,0.134,0.26,0.208,0.427,0.199c1.407-0.072,7.996-0.679,12.588-5.823	c0.095-0.106,0.144-0.253,0.135-0.395C45.156,20.538,40.815,13.257,40.107,12.15z"/><ellipse cx="30.5" cy="26" opacity=".05" rx="4.5" ry="5"/><ellipse cx="30.5" cy="26" opacity=".05" rx="4" ry="4.5"/><ellipse cx="30.5" cy="26" fill="#fff" rx="3.5" ry="4"/><ellipse cx="17.5" cy="26" opacity=".05" rx="4.5" ry="5"/><ellipse cx="17.5" cy="26" opacity=".05" rx="4" ry="4.5"/><ellipse cx="17.5" cy="26" fill="#fff" rx="3.5" ry="4"/></svg></a>
          <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/><stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/><stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg></a>
          <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="32px" height="32px"><linearGradient id="_osn9zIN2f6RhTsY8WhY4a" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"/><stop offset="1" stopColor="#007ad9"/></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"/></svg></a>
          
        </div>

      </div>
      <div className="grid grid-cols-2">
        <div className="mx-6 md:hidden block">
          <img src="/img/footer.svg" className="h-24 w-24" alt="" />
        </div>
        <div className="flex md:hidden ml-auto mr-12 flex-col space-y-2 my-8">
          <Link href="/about" passHref><div className="text-white cursor-pointer font-normal">About Us</div></Link>
          <Link href="/career" passHref><div className="text-white cursor-pointer font-normal">Career</div></Link>
          </div>

          <div className="flex md:hidden space-y-2 my-8 flex-col">
          <div className="text-lg font-medium mb-4 text-white mx-12">
            Join Us
          </div>
          <div className="flex md:hidden flex-1 mx-12 space-x-6">
          <div className="text-white text-sm">
            <a href="https://www.instagram.com/teenternz/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div className="text-white text-sm">
            <a href="https://discord.gg/UPuWU6GH" target="_blank" rel="noreferrer">Discord</a>
          </div>
          <div className="text-white text-sm">
            <a href="https://twitter.com/teenternz" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          </div>

          </div>

      </div>
    </div>
  )
}

export default Footer
