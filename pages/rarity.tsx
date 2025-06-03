import Image from "next/image"

import React from "react"
import {backGround, earPiece, 
  earpiece,faCe, backGround1,
   shirt, sHirt, face,
  Fur, FuR, Glasses, GlasseS,
Hair, HaiR, Jacket, JackeT,
Mouth, MoutH, Tie, TiE} 
from "../constants/constants"
const rarity = () => {
  return (
    <>
    <section className="absolute bg-transparent relative bg-grey-800 pt-10 heropattern-plus-gray-700 font-mono">
      <main className="bg-transparent pt-20 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-15">
      <div className="text-center">
            <p>Background</p>
            <Image src={backGround1} alt="Background1" width={500} height={300}  className="" /></div>

      <div className="text-center">
        <p>Rarity</p>
            <Image src={backGround} alt="Background" width={500} height={300}  className="rounded-xl"/>
          </div>
          
        
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-15">
      
      <div className="text-center">
        <p>Rarity</p>
            <Image src={sHirt} alt="Background" width={500} height={300}  className="rounded-xl"/>
          </div>

      <div className="text-center">
            <p>Shirt</p>
            <Image src={shirt} alt="shirt" width={500} height={300}  className="" /></div>
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Face</p>
            <Image src={face} alt="shirt" width={500} height={300}  className="" /></div>

      <div className="text-center">
        <p>Rarity</p>
            <Image src={faCe} alt="" width={500} height={300}  className="rounded-xl"/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Rarity</p>
            <Image src={earPiece} alt="" width={500} height={300}  className="rounded-xl" /></div>

      <div className="text-center">
        <p>Earpiece</p>
            <Image src={earpiece} alt="" width={500} height={300}  className="rounded-xl"/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Glasses</p>
            <Image src={Glasses} alt="" width={500} height={300}  className="" /></div>

      <div className="text-center">
        <p>Rarity</p>
            <Image src={GlasseS} alt="" width={500} height={300}  className="rounded-xl"/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Rarity</p>
            <Image src={TiE} alt="" width={500} height={300}  className="rounded-xl" /></div>

      <div className="text-center">
        <p>Tie</p>
            <Image src={Tie} alt="" width={500} height={300}  className=""/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Mouth</p>
            <Image src={Mouth} alt="" width={500} height={300}  className="" /></div>

      <div className="text-center">
        <p>Rarity</p>
            <Image src={MoutH} alt="" width={500} height={300}  className="rounded-xl"/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Rarity</p>
            <Image src={FuR} alt="" width={500} height={300}  className="rounded-xl" /></div>

      <div className="text-center">
        <p>Fur</p>
            <Image src={Fur} alt="" width={500} height={300}  className=""/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Hair</p>
            <Image src={Hair} alt="" width={500} height={300}  className="" /></div>

      <div className="text-center">
        <p>Rarity</p>
            <Image src={HaiR} alt="" width={500} height={300}  className="rounded-xl"/>
          </div>

      
      </main>
      <main className="bg-transparent pt-2 h-full w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 container mx-auto gap-5">
      
      <div className="text-center">
            <p>Rarity</p>
            <Image src={JackeT} alt="" width={500} height={300}  className="rounded-xl" /></div>

      <div className="text-center">
        <p>Jacket</p>
            <Image src={Jacket} alt="" width={500} height={300}  className=""/>
          </div>

      
      </main>
    </section>
    </>
  )
}

export default rarity