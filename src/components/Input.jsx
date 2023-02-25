import React from 'react'
import Img from '../img/img.png';
import  Attach from '../img/attach.png'
import  Send from '../img/sen.png'
export const Input = () => {
  return (
    <div className="input">
    <input type="text" placeholder='Type Something....' />
    <div className="send">
      <img src={Img} alt="" />
      <input type="file" style={{display:"none"}} id="file"/>
      <label htmlFor="file">
        <img src={Attach} alt="" />
      </label>
      <input type="submit" style={{display:"none"}} id="send"/>
      <label htmlFor="send">
        <img src={Send} alt="" />
      </label>
    </div>
    </div>
  )
}
export default Input;