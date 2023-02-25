import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user'/>
      </div>
      <div className='userChat'>
      <img src='https://technicalgang.in/assets/img/Amith.jpeg' alt=''/>
        <div className='uesrChatInfo'>
          <span>
            Amith
          </span>
        </div>
      </div>
    </div>
  )
}
export default Search;