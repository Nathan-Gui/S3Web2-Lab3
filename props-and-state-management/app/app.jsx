'use client'

import { useState } from 'react';
import ToDoList from './component/toDoList'

// const taskArr = ['Do laundry', 'Go to gym', 'Walk dog']

const AppJsx = () => {

  const [taskArr, setTasks] = useState( [] )

  const loadTasks = () => {
    setTasks( ['Do laundry', 'Go to gym', 'Walk dog'] )
  }

  const clearTasks = () => {
    setTasks( [] )
  }
  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className='border border-blue-600 shadow-lg rounded-lg p-2 h-60 w-100 mb-3'>
          <h1 className="text-2xl font-bold mb-4">Nathan Gui's To-Do List</h1>
          <ToDoList tasks={taskArr} />
        </div>
        <div>
          <button type='button' onClick={loadTasks}  className='bg-blue-600 hover:bg-blue-500 mx-6 my-2 w-32 py-2 text-white w-32 rounded-lg'>Load Tasks</button>
          <button type='button' onClick={clearTasks} className='bg-blue-600 hover:bg-blue-500 mx-6 my-2 w-32 py-2 text-white w-32 rounded-lg'>clear Tasks</button>
        </div>
      </div>
    </>
  )
}

export default AppJsx