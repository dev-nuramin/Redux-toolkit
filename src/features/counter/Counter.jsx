import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, mainReset, randReset, reset } from './counterSlice'

const Counter = () => {
    const {counter} = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div className='container my-5'>
        <div className="row justify-content-center">
            <div className="col-md-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h1>{counter}</h1>
                    <hr />
                    <button className='btn btn-info' onClick={() => dispatch(decrement())}>--</button> &nbsp;
                    <button className='btn btn-success' onClick={() => dispatch(increment())}>++</button> &nbsp;
                    <button className='btn btn-danger' onClick={() => dispatch(reset())}>Reset</button>&nbsp;
                    <button className='btn btn-primary' onClick={() => dispatch(mainReset())}>mainReset</button>&nbsp;
                    <button className='btn btn-danger' onClick={() => dispatch(randReset(Math.floor(Math.random() * 1000)))}>randReset</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Counter