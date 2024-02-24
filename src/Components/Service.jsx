import React from 'react'
import time from "../assets/time.png"
import rocket from "../assets/rocket.png"
import base from "../assets/base.png"




function Service() {

    const data = [

        {
            img: rocket,
            desc: "SwiftOps: Elevating Your Experience with Rapid Service Excellence."
        },
        {
            img: time,
            desc: "RefundSwift: Unmatched Service Delivery with 48-Hour Guarantee."
        },
        {
            img: base,
            desc: "ProcessEase: Streamlined, Effortless, Every Transaction Simplified."
        },
    ]






    return (
        <div className='overflow-hidden'>

            <hr />

            <div className='text-center p-4 flex justify-center py-10 w-[100%]'>
                <h1 className='md:text-2xl text-xs sm:text-xl text-center font-bold'>Why should you choose to utilize our services?
                    <p className='text-[10px] md:text-sm py-3 text-center font-normal md:px-52 '>Explore the convenience of Saer.pk,
                        Pakistan's first online platform for hassle-free Umrah packages.
                        Get your ideal Umrah package in just seconds with simplicity at your fingertips.
                        Experience swift and effortless booking for your spiritual journey!</p>
                </h1>

            </div>


            <section class=" body-font">
                <div class=" px-5  ">

                    <div class="flex flex-wrap -m-4 text-center">


                        {
                            data.map((v, i) => {
                                return (
                                    <>


                                        <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                                            <div class=" px-4 py-6 rounded-lg">
                                                <img src={v.img} className='mx-auto py-2' alt="" />
                                                <p class="leading-relaxed text-sm">{v.desc}</p>
                                            </div>
                                        </div>






                                    </>
                                )
                            })
                        }





                    </div>
                </div>
            </section>




        </div>
    )
}

export default Service