import { Icon } from '@iconify/react'
import React from 'react'

function UserCard() {

const data = [
    {
        review:"Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
        name:"HOLDEN CAULFIELD",
        role:"Senior Product Designer"
    },
    {
        review:"Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
        name:"HOLDEN CAULFIELD",
        role:"Senior Product Designer"
    },
    {
        review:"Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
        name:"HOLDEN CAULFIELD",
        role:"Senior Product Designer"
    },
    {
        review:"Rob is a super fantastic person who knows exactly how to communicate improvements to UX/UI.",
        name:"HOLDEN CAULFIELD",
        role:"Senior Product Designer"
    },

]





  return (

<div className='overflow-hidden'>

<hr />

<h1 className='md:text-2xl text-lg font-bold py-5 text-center'>What Our Users Are Saying</h1>
<section class="text-gray-600 body-font">
  <div class=" px-5 py-24 mx-auto">
    <div class="flex flex-wrap  justify-around">



{data.map((v,i)=>{
    return(
        <>
        
        <div class="lg:w-[22%] md:w-[47%] w-full shadow-lg lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/png;base64,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"/>
          <p class="leading-relaxed">{v.review} </p>
    <div className=' flex justify-center py-5 text-yellow-400'>
    <Icon icon="material-symbols:star" width="32" height="32" />
    <Icon icon="material-symbols:star" width="32" height="32" />
    <Icon icon="material-symbols:star" width="32" height="32" />
    <Icon icon="material-symbols:star" width="32" height="32" />
    <Icon icon="material-symbols:star" width="32" height="32" />

    </div>
    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>

          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{v.name}</h2>
          <p class="text-gray-500">{v.role}</p>
        </div>
      </div>
        
        
        
        
        </>
    )
})}




   
    


    </div>
  </div>
</section>

</ div>




  )
}

export default UserCard