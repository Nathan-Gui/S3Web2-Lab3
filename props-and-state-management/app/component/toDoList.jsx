import React from 'react'

const ToDoList = ({tasks}) => {
  console.log(tasks)

  if (!tasks || tasks.length < 1){
    return (
      <>
        <p className='p-3'>Epmpty List.</p>
      </>
    )
  }

  return (
    <ul className="p-2 w-80">
      {tasks.map((x,idx) => (
        <li key={idx} className="text-zinc-800 py-2 border-b last:border-b-0">
          <div className='flex'>
            <input      id={`idx_${idx}`} className='mx-3' type="checkbox" />
            <label htmlFor={`idx_${idx}`} className=''>{idx + ": " + x} </label>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ToDoList
