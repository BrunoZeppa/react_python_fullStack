import React, { useEffect, useState } from 'react';
import { getAllTask } from '../api/task.api';
import TaskCard from './TaskCard';


const TaskList = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTask() {
            const res = await getAllTask();
            setTasks(res.data)
        }
        loadTask()
    }, [])


    return (
        <div style={{ overflow: "scroll", display: "flex", flexWrap: "wrap", gap: "5px", padding: "5px" }}>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}

        </div>
    );
};

export default TaskList;

