import React, { useState } from 'react'
import '../App.css';
import { AiFillCaretDown,AiFillCaretUp} from "react-icons/ai";

const SingleContent = ({title,description}) => {
    const [show,setShow] = useState(false)
  return (
    <article className='content'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShow(!show)}>
                {show? <AiFillCaretUp/> : <AiFillCaretDown/>}
            </button>
        </header>
        {show && <p>{description}</p>}
    </article>
  )
}

export default SingleContent