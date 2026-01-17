import { createContext, useState, useEffect } from "react";
import { tasks as tasksData } from './../tasks'

export const TaskContext = createContext()

export default function TaskProvider({ children }) {


    const [tasks, setTasks] = useState([])
    useEffect(() => {
        setTasks(tasksData)
    }, [])

    function addTask(task) {
        setTasks([...tasks, {
            id: tasks.length + 1,
            title: task.title,
            description: task.description
        }])
    }
    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}