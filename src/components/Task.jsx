/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { todoContext } from "../context/TodoContext";
import { COLORS, VARIENTS } from "../utils/constants";
import useTheme from "../hooks/theme";

const Task = ({ task }) => {
  const [taskState, setTaskState] = useState(false);
  const { title, id, isCompleted } = task;
  const {handleIsComplete, handleDeleteTask, handleEditExistingTask } = useContext(todoContext);
  const {changeTaskTheme, theme} = useTheme(id);


  function handleTaskThemeToggle (c,i) {
    changeTaskTheme(c, i, id)
    setTaskState((prev) => !prev);
  }

  function handleDeleteItem (id) {
    handleDeleteTask(id)
  }


  return (
    <div className=" w-[69%] mx-auto relative">
      {/* <li className={`flex items-center  justify-between px-4 py-2 ${'bg-'+"["+color+"]"} max-h-[42px] rounded-sm transit ${ */}
    <li className={`flex items-center  justify-between px-4 py-7 ${theme?.color !== "" ? VARIENTS[theme.color] : 'bg-teal-700'} max-h-[42px] rounded-sm transit ${
        isCompleted ? "bg-orange-700" : ""
      }`}
    >
      <p
        className={`font-semibold tracking-wider text-[#fff] ${
          isCompleted ? "!line-through !italic" : ""
        } `}
      >
        {title}
      </p>
      <div className="flex items-center justify-between gap-6">
        <input
          type="checkbox"
          checked={isCompleted}
          name="markasdone"
          onChange={() => handleIsComplete(id)}
          className="w-4 h-4 mt-2 border-none outline-none checked:accent-sky-950 "
        />
        <div
          className=" icon-wrapper group"
          onClick={() => handleDeleteItem(id)}
        >
          <FaRegTrashAlt className="group-hover:text-slate-50  !text-slate-50" />
        </div>
        <div className=" icon-wrapper group ps-1" onClick={() => handleEditExistingTask(id, task)}>
          <FaRegEdit className="group-hover:text-slate-50 !text-slate-50"  />
        </div>
        <div className="icon-wrapper group">
          <IoColorPaletteOutline className="group-hover:text-slate-50 !text-slate-50" onClick={() => setTaskState((prev) => !prev)}/>
        </div>
      </div>
    </li>
    {taskState && <div className="flex w-[95px] flex-wrap gap-0.5 absolute -right-[105px] -top-3 hover:scale-[1.02] transit bg-white p-1 rounded-md" key={id}>
      {COLORS.map((c,i) => <span onClick={() => handleTaskThemeToggle(c,i)} className={`bg-[${c}]  h-[20px] w-[26px] mx-auto cursor-pointer rounded-md `} key={i}></span>)}
    </div>}
    </div>
  );
};

export default Task;
