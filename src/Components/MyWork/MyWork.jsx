import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { FaArrowRightLong } from "react-icons/fa6";

const MyWork = () => {
  return (
    <div id='work' className='Mywork'>
      <div className="Mywork-title">
        <h1>My Project</h1>
      </div>
      <div className="Mywor-container">
         {mywork_data.map((work,index)=>{
            return <img width="300" height="200" key={index} src={work.w_img} alt="" />
         })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <FaArrowRightLong/>
      </div>
    </div>
  )
}

export default MyWork
