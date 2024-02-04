import { useContext } from "react"
import Task from "./Task"
import { todoContext } from "../context/TodoContext"

const TaskList = () => {
  const {tasks} = useContext(todoContext)

  return (
    <ul className="w-[100%] space-y-4 py-3 max-h-[18rem] h-full overflow-y-scroll task-list-style " >
        {tasks.map(task => <Task key={task?.id} task={task} />)}
    </ul>
  )
}

export default TaskList