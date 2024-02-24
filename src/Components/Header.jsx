import { Icon } from '@iconify/react'
import React from 'react'

function Header() {
  return (
    <div className=' p-3 border flex items-center sm:px-24 justify-between overflow-hidden'>
    <div className='flex items-center gap-2'>
      <div className='py-1.5 px-3.5 rounded-xl sm:rounded-2xl bg-[#1476D1]'>
        <h1 className='text-white text-lg font-bold'>S</h1>
      </div>
      <div>
        <h1 className='text-[#1476D1] font-bold text-base sm:text-lg'>Saer.pk</h1>
      </div>
    </div>


    <div className='flex items-center gap-1'>
      <div className='flex gap-2.5 sm:gap-5'>
        <div>
          <h1 className='sm:text-lg text-sm'>Help me</h1>
        </div>
        <div>
          <h1 className='sm:text-lg text-sm'>My orders</h1>
        </div>
      </div>

      <div className='flex items-center gap-1 sm:gap-2'>
        <div>
          <Icon icon="lets-icons:bell-pin-light" className='sm:h-7 sm:w-7 h-6 w-6' />
        </div>


        <div >
          <img className='sm:w-8 sm:h-8 h-6 w-6 rounded-full object-cover' src="https://s3-alpha-sig.figma.com/img/a27b/b91a/fb0ec304610b4834f08a60cec93a7a06?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TAFK6GoTK9JcS8psuVBSZ~NP5tBIm1LxJWkwex7Vx--ao~izUW5I1uKyDapi~hpl1IqDHUOPljShTneumd8-1KGESMmY8c3YBY0-7FYUw7IoI6B5ekYpTJwh09j1gZ20H7VNfGrhrbeO3gJYIUchugWSlLsJ-7FYzaneE~WqpPiDf1p~qm~PGbXN7qVvYZ5b1vuuJzLkyy-WKAFoNAdrKJrQZmxZC5K6JszRWZjM5930vl4LVE071UZ2PIaKspWcRtTFxh7k0NW~uLxtBQlN5OpsMkOo0Eurx1vauTH9UK2oYp2ZMDSAq9t4Cn0tXb9-D2Huzjn4DDwc89r3AvNcCQ__" alt="" />
        </div>
      </div>


    </div>

  </div>
  )
}

export default Header