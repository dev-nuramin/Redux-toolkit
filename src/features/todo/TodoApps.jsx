import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo } from './todoSlice'

const TodoApps = () => {

    const {todo} = useSelector(state => state)
    console.log(todo)
    const [food, setFood] = useState("")
    const dispatch = useDispatch()
  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-5">
        <div className="card shadow-sm">
            <div className="card-body">
               
               <input type="text" onChange={(e) => setFood(e.target.value)}/>
               <button onClick={() => dispatch(addTodo(food))}>Add</button>
               <hr />
               <ul>
               {todo.map((item, index) => {
                    return  <li key={index}>{item} <button onClick={() => dispatch(delTodo(item))}>Del</button> </li>
                })}
               </ul>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default TodoApps