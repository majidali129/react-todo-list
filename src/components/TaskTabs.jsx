import { useContext } from "react";
import Button from "../ui/Button";
import { todoContext } from "../context/TodoContext";
import { tabs } from "../utils/tabs";


const TaskTabs = () => {
  const {handleFilter} = useContext(todoContext);

  return (
    <ul className="flex items-center md:gap-3">
        {tabs.map(tab => <Button key={tab.name} active={tab?.isActive} onClick={() => handleFilter(tab.name)} >{tab.name}</Button>)}
    </ul>
  )
}

export default TaskTabs