import React, { useState } from 'react';
import ToggleToDo from './ToggleToDo';
import '../App.css';

const AddToDo = () => {
    const [toDoList, setToDoList] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setToDoList([...toDoList, task]);
            setTask('');
        }
    };

    return (
        <div className='center'>
            <h1 >To-Do List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="jana tapsyrma qos"
            />
            <button onClick={handleAddTask}>Add</button>
        <div className='gridcont'>
            {toDoList.map((item, index) => (
                <div key={index} className='checkBox'>
                    <ToggleToDo />
                    <h4>{item}</h4>

                </div>
            ))}
</div>
        </div>
    );
};

export default AddToDo;