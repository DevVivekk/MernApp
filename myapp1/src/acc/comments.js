import React from 'react'

function Comments({value,id}) {
  return (
    <>
     <div className='commentss'>
     <div className='allinone'>
          <h4 style={{textAlign:'center',color:'green'}}>Comment Section</h4>
          <hr />
           <h3 className='name-comment' style={{textDecoration:'underline'}}>{value.name}</h3>
           <h4 className='comment-comment'>{value.comment}</h4></div>
           </div>
    </>
  )
}

export default Comments