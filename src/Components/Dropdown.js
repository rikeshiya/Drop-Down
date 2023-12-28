import { useState } from "react";
import './Dropdown.css'
const Dropdown =()=>{

    // item data store

    const item =[
                    {
                    select:"select",
                    Yes:"Yes",
                    No:"Probably Not"
                    }
                ]
                // useState Hook 
                const [name,setName] =useState()
                // onChange event
                const changeHandler =(e)=>{
                    setName(e.target.value)
                }
    return(
        <>
        {/* dropdown container */}

             <div className="dropdown-container">
                {/*  dropdown Heading */}
                <h1>Q.Should you use a dropdown?</h1>
            <select value={name} onChange={changeHandler}>
                {
                    item.map((value)=>{
                      console.log(value);
                     return (
                        <>
                                <option>{value.select}</option>  
                                <option>{value.Yes}</option>
                                <option>{value.No}</option>
                        </>
                        )
                    })
                }
                    
            </select>
            <div>
                {/* change state name on hook method */}
                <h1>{name}</h1> 
            </div> 
            </div> 
             
        </>
    )
}
export default Dropdown