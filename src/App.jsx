import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskTabs from "./components/TaskTabs";


export default function App() {
  return (
    <section className="relative w-screen h-screen bg-sky-600">
      <div className="absolute h-[80vh] w-full flex flex-col items-center  max-w-5xl pt-10 mx-auto space-y-10 top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl outline-2 outline-dashed outline-sky-400 bg-sky-950 ">
          <TaskForm />
          <TaskTabs />
          <TaskList />
      </div>
    </section>
  )
}