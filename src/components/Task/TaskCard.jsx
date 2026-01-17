import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-700 text-white p-4 mb-2 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-50 text-sm">{task.description}</p>
            <button className="bg-red-500 text-white px-2 py-1 rounded-md mt-4 hover:bg-red-600 cursor-pointer" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
}