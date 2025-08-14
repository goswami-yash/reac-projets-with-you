import React from 'react'

function Card({username}) {
console.log(username);
  return (
    
    <>
   
     <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">  <div> 
         <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr09piP6jki0WLDGQnRLC2rmn5XHPtBZJ6Mg&s" />  </div>  <div className="flex items-center md:items-start">    <span className="text-2xl font-medium">{username} Home</span>           </div></div>
    </>
  )
}

export default Card