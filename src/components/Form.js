import React from 'react'
import { useState } from 'react';
import "./Form.css"
import { Detail } from './value';
import { res } from './value';

const Form = () => {
    const[data,setData] = useState(res)
    const [ category,setCategory] = useState(Detail)
    const [subcategory,setSubCategory] = useState("")
    const [print,setPrint] = useState(false)
    
    const filterByCategory=(title)=>{
        setPrint(false)
        setCategory(Detail.filter(a=>a.irs_description === title))
    }
   const findValue=(c)=>{
    setPrint(false)
    setSubCategory(category.find(z=>z.combined_description === c))
   }
   console.log(subcategory)

   function myfun(){
       return setPrint(true)
       
   }
     
  return (
    <div className='form'>
        
        <div className='row'>
        <div className='form-group'>
            <label>Category</label>
            <select onChange={(e)=>filterByCategory(e.target.value)} className='form-select' placeholder='select Category'>
               <option>Select Category</option>
               {
                data.map((categoryget)=>(
                        <option key={categoryget.mcc}>{categoryget.irs_description}</option>
                ))
               
}
            </select>
        </div>

        <div className='form-group'>
            <label>Sub-Category</label>
            <select onChange={(e)=>findValue(e.target.value)} className='form-select' placeholder='select Category'>
                <option >Select Sub-Category</option>
                {
                category.map((categoryget)=>(
                        <option key={categoryget.id}>{categoryget.combined_description}</option>
                ))
               
}
                
            </select>
        </div>

        <button type='submit' onClick={myfun}> Submit</button>
        
        {print && subcategory ? <h2>Merchant Category Code is : {subcategory.mcc}</h2> : ""}
        
        
    </div></div>
  )
}

export default Form