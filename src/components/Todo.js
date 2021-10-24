import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from '../actions/index'





function Todo() {

    const [input, setInput] = useState('')

    const list = useSelector((state)=> state.todoReducers.list);

    const dispatch = useDispatch();


    const hangelchange = (event) => {
        setInput(event.target.value)
    }

    const handelclick = () => {
        dispatch(addTodo(input), setInput(''));
    }






    return (
        <>
            <div className="main-div">
                <div className="chlid-div">
                    <figure>
                        <figcaption>
                            add your list
                        </figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" value={input} onChange={hangelchange} />
                        <button onClick={handelclick}>add todo</button>


                    </div>

                    {
                        list.map((elem) => {
                            return (

                                <div key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div>
                                        
                                    
                                    <button onClick={() => dispatch(deleteTodo(elem.id))}>delete todo</button>
                                    </div>
                                </div>
                            )






                        })
                    }
                </div>
                <button onClick={()=> dispatch(removeTodo())} > remove all </button>
            </div>

        </>
    )
}

export default Todo
