import { useContext } from "react"
import Task from "./Task"
import { todoContext } from "../context/TodoContext"

const TaskList = () => {
  const {tasks} = useContext(todoContext)
  return (
    <ul className="w-1/2 space-y-3 py-3 max-h-64 overflow-y-scroll task-list-style " >
        {tasks.map(task => <Task key={task.id} task={task} />)}
    </ul>
  )
}

export default TaskList