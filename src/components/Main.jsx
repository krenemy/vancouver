import React from 'react'

function Main() {
  return (
    <div className='font-bold w-full h-full bg-black text-white flex flex-col items-center justify-center gap-16 py-16 px-4'>
      <div className='flex flex-col justify-center items-center gap-8 p-8'>
        <div className='flex-wrap text-5xl lg:text-7xl flex flex-col justify-center items-center'><span>Tailormade to Manage all</span><span>your Data registers</span></div>
        <div className='flex flex-col text-xl justify-center items-center flex-wrap text-gray-400'><span>Operate with your data predictably, securely, and at a lower cost in an intuitive</span><span>and easy to navigate dashboard.Designed to run all your data types.</span></div>
      </div>
      <div className='flex flex-row gap-8'>
        <button className='font-bold bg-white px-4 py-3 text-black rounded-md'>Buy for $24 ^-^</button>
        <button className='font-bold border-2 rounded-md px-4 py-3 border-fuchsia-400 hover:text-zinc-400'>Learn More</button>
      </div>
      <div className='flex justify-center items-center w-50 skew-z-6'>
        <img className='w-5/6' src="https://assets.website-files.com/62bc1260fe7b1f3d37a8ea01/62bc141a89b7006a587f0ac8_App%20Image-p-2000.jpeg" alt="" />
      </div>
      <div>
        <div>icons</div>
        <h2>Trusted by Top-tier product campanies</h2>
      </div>
    </div>
  )
}

export default Main