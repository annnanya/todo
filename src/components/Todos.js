import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    return (
        <div>
            {todos.map(todo =>
                <>
                    <div key={todo.id}>{todo.text}</div>
                    <button className='' onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </>
            )}
        </div>
    )
}

export default Todos