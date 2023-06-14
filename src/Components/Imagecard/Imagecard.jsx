import React from 'react'
import data from "./Works.json"

import "./imagecard.css"

export const Imagecard = () => {
  return (
    <div className='imagecard'>
     {
        data.map((item)=>{
            return(
                <div className='card'>
                    <img src={item.src} />
                    <div className='card_details'>
                    <p>{item.name}</p>
                    <button><i class="fa-solid fa-arrow-right"></i></button>         
                    </div>
                </div>
            )
          
          
        })
      }
    
    </div>
       
  )
}
