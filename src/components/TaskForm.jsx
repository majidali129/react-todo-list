import { useContext, useEffect, useState } from "react"
import { todoContext } from "../context/TodoContext"

const TaskForm = () => {
  const {handleAddNewTask, editAbleTask} = useContext(todoContext);
  const [task, setTask] = useState('');


  useEffect(() => {
    if(editAbleTask){
      setTask(editAbleTask.title);
    }
  }, [editAbleTask])
  const handlSubmission = (e) => {
    e.preventDefault();
    if(editAbleTask){
      handleAddNewTask({...editAbleTask, isCompleted: false, title: task});
    }else{

      const newTask = {
        title: task,
        isCompleted: false,
        id: crypto.randomUUID(),
      }
      handleAddNewTask(newTask);
    }
    setTask('');
  }

  return (
    <form className="flex w-[69%] gap-2 p-1 *:rounded-sm " onSubmit={handlSubmission}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} name="taskName" placeholder="New Task" className="md:w-full md:p-3 md:text-lg md:tracking-wide focus:translate-x-[2px] transit placeholder:italic text-sky-950  focus:outline-none" />
        <input type="submit" value="Add" className="md:w-1/4 border-none outline-none cursor-pointer transit bg-sky-600 hover:bg-sky-700 hover:scale-[1.02] text-sky-50" />
    </form>
  )
}

export default TaskForm