import { useState, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'

function TaskForm() {
    const { addTask } = useContext(TaskContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        addTask({ title, description })
        console.log(title, description)
        setTitle('')
        setDescription('')
    }
    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
                <h1 className="text-2xl font-bold text-white mb-3">Add Task</h1>
                <input className="bg-slate-300 p-3 w-full mb-2" type="text" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <input className="bg-slate-300 p-3 w-full mb-2" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="bg-indigo-500  px-2 py-1 text-white rounded-md mt-4 hover:bg-blue-600 cursor-pointer" type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm