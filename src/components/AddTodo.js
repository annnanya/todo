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
        <div className="">
            <form onSubmit={handleSubmit} className="">
                <input
                    type="text"
                    placeholder="Add a new task"
                    className=""
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button
                    type="submit"
                    className=""
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;