import React from 'react'

const GetTodo = ({todo,id,editHandle,deleteHandle}) => {
  return (
    <div className='get-todo'>
      <p>{todo}</p>
      <div className='get-todo-button'>
        <button onClick={()=>editHandle(id)}><i class="fas fa-edit"></i>
        </button>
        <button onClick={()=>deleteHandle(id)}><i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default GetTodo