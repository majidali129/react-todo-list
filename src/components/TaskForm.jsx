import { useContext, useState } from "react"
import { todoContext } from "../context/TodoContext"

const TaskForm = () => {
  const {updateTaskList} = useContext(todoContext);
  const [task, setTask] = useState('');


  const handlSubmission = (e) => {
    e.preventDefault();
    const newTask = {
      title: task,
      isCompleted: false,
      id: crypto.randomUUID(),
    }
    updateTaskList(newTask);
    setTask('');
  }

  return (
    <form className="flex w-1/2 gap-2 p-1 *:rounded-sm " onSubmit={handlSubmission}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} name="taskName" placeholder="New Task" className="md:w-3/4 md:p-1 md:text-lg md:tracking-wide focus:translate-x-[2px] transit placeholder:italic text-sky-950  focus:outline-none" />
        <input type="submit" value="Add" className="md:w-1/4 border-none outline-none cursor-pointer transit bg-sky-600 hover:bg-sky-700 hover:scale-[1.02] text-sky-50" />
    </form>
  )
}

export default TaskForm