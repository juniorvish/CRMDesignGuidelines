```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskManagement = () => {
    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('/api/tasks');
            setTaskData(response.data);
        };

        fetchTasks();
    }, []);

    const updateTask = async (id, updatedTask) => {
        const response = await axios.put(`/api/tasks/${id}`, updatedTask);
        setTaskData(taskData.map(task => (task.id === id ? response.data : task)));
    };

    return (
        <div id="taskManagementContainer" className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-gray-900">Task Management</h2>
            <div className="grid grid-cols-1 gap-4 mt-4">
                {taskData.map(task => (
                    <div key={task.id} className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <button onClick={() => updateTask(task.id, { ...task, completed: !task.completed })} className="mt-2 text-sm text-blue-500">
                            {task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskManagement;
```