import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className='container-add'>
            <form onSubmit={handleSubmit} className='form'>
                <input
                    type="text"
                    placeholder="Add a new task"
                    className='text-input'
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button
                    type="submit"
                    className='button-submit'
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;