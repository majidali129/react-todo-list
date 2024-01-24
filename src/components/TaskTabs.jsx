import Button from "../ui/Button";

const tabs = [
    {name: 'All', isActive: false, },
    {name: 'Completed', isActive: false, },
    {name: 'Uncompleted', isActive: false, }
];
const TaskTabs = () => {
  return (
    <ul className="flex items-center md:gap-3">
        {tabs.map(tab => <Button key={tab.name}>{tab.name}</Button>)}
    </ul>
  )
}

export default TaskTabs