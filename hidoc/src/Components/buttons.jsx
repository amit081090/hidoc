import React from 'react'
// import { fetchDrugData } from '../fetchDrugData'
// console.log(fetchDrugData)

const buttons = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mr-20 ml-20">
   
    <div className="p-4  ">
    Allegra is an antihistamine that reduces the effects of natural 
    chemical histamine in the body. Histamine can produce symptoms of
     sneezing, itching, watery eyes, and runny nose.
    </div>
  
    <div className="grid grid-cols-3 gap-4">
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Anesthesia</button>
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Cardiology</button>
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Critical care</button>
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Dentistry</button>
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Dermatology</button>
        <button className="p-2 m-1 rounded bg-[#D3F7EF]">Diabetology</button>
    </div>
</div>
  )
}

export default buttons