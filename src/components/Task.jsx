/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { todoContext } from "../context/TodoContext";

const Task = ({ task }) => {
  const { handleIsComplete, handleDeleteTask } = useContext(todoContext);
  const { title, id, isCompleted } = task;

  return (
    <li
      className={`flex items-center justify-between px-4 py-2 bg-teal-100 max-h-[42px] rounded-sm transit ${
        isCompleted ? "bg-teal-300" : ""
      }`}
    >
      <p
        className={`font-semibold tracking-wider text-slate-900 ${
          isCompleted ? "line-through italic text-red-900" : ""
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
          onClick={() => handleDeleteTask(id)}
        >
          <FaRegTrashAlt className="group-hover:text-slate-50" />
        </div>
        <div className=" icon-wrapper group ps-1">
          <FaRegEdit className="group-hover:text-slate-50" />
        </div>
        <div className="icon-wrapper group">
          <IoColorPaletteOutline className="group-hover:text-slate-50" />
        </div>
      </div>
    </li>
  );
};

export default Task;
