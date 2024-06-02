import React, { useState } from 'react'
import {assets} from '../../assets/assets'
function Navbar() {
    const [menu,setMenu] = useState("home")
    const active = `text-ecommerce`
  return (
    <div className=' flex justify-between items-center pt-[20px]'>
        <img src={assets.logo} alt="" className='w-[230px]' />

        <ul className='flex gap-[30px] text-2xl font-semibold text-textBlack'> 
            <li 
            className={menu==="home"?"border-b-[4px] pb-[6px] border-e-textBlack cursor-pointer":" cursor-pointer"}
            onClick={()=>setMenu("home")}
            >Home</li>

            <li 
            className={menu==="menu"?"border-b-[4px] pb-[6px] border-e-textBlack":"cursor-pointer"}
            onClick={()=>setMenu("menu")}
            >Menu</li>

            <li 
            className={menu==="contactUs"?"border-b-[4px] pb-[6px] border-e-textBlack":"cursor-pointer"}
            onClick={()=>setMenu("contactUs")}
            >Contact us</li>
        </ul>

        <div className='flex gap-[40px] items-center'>
            <img src={assets.search_icon}/>
            <div>
                <img src={assets.basket_icon}/>
                <div></div>
            </div>
            <button className='
            bg-transparent text-2xl border border-solid  text-ecommerce 
            font-semibold px-4 py-2 cursor-pointer rounded-md hover:text-white
            hover:bg-ecommerce transition-all ease-in-out'
            >Sign in</button>
        </div>

    </div>
  )
}

export default Navbar