import { useState } from 'react'
import adidas from "../assets/adidas.png"
import netflix from "../assets/netflix.png"
import aws from "../assets/aws.png"
import { Carousel } from 'flowbite-react';
function CarouselCustom() {
  return (
    <>

      <div className="h-screen pb-40" >
        <Carousel leftControl="" rightControl="" slideInterval={2000}>
          <div className='flex flex-col items-center'>
            <div className='flex w-full items-center justify-center'>
              <img style={{width:"10%",height:"10%"}} src={adidas} alt="..." />
              <img style={{width:"15%",height:"15%",paddingLeft:"12px"}} src={netflix} alt="..." />
              <img style={{width:"15%",height:"15%"}} src={aws} alt="..." />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='flex w-full items-center justify-center'>
              <img style={{width:"10%",height:"10%"}} src={adidas} alt="..." />
              <img style={{width:"15%",height:"15%",paddingLeft:"12px"}} src={netflix} alt="..." />
              <img style={{width:"15%",height:"15%"}} src={aws} alt="..." />
            </div>
          </div>
        </Carousel>
      </div>

    </>
  )
}
export default CarouselCustom