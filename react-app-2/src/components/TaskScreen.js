import React, { useEffect, useState } from "react";
import { tasks, getAllTasks } from "../apis/taskApi";

function TaskScreen() {
    const [allTasks, setAllTasks] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Task Mounted");
        getAllTasks().then((foundTasks) => setAllTasks(foundTasks));
    }, []);
    useEffect(() => {
        console.log("Task Updated");
        setCount(5);
    }, []);
    return (
        <div>
            <h1>Task Screen</h1>
            {allTasks.map((task, index) => (
                <div key={index} onClick={(e) => setCount(count + 1)}>
                    <h3>
                        {task.taskNumber} {task.taskName}
                    </h3>
                    <p>{task.taskDescription}</p>
                </div>
            ))}
        </div>
    );
}

export default TaskScreen;
