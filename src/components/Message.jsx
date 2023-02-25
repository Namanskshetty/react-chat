import React from 'react'

export const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src='https://namanskshetty.in.net/images/naman.jpg'alt=''/>
        <span>Just Now</span>
      </div>
        <div className="messageContent">
          <p>Hello</p>
          {/*<img src='' alt=''/>*/}
        </div>
      
      </div>
  )
}
export default Message;