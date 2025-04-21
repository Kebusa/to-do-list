import React, { useState } from 'react';


const ToggleToDo = () => {
    const [toDoCheck, setToDoCheck] = useState({ id: null, completed: false });

    const handleToggle = () => {
        setToDoCheck((prev) => {
            const updatedToDo = {
                ...prev,
                completed: !prev.completed,
            };
            return updatedToDo;
        });
    };

    return (
        <div>
             
                <input
                type="checkbox"
                checked={toDoCheck.completed}
                onChange={handleToggle}
                style={{ cursor: 'pointer'}}
            />
           

        </div>
    );
};

export default ToggleToDo;