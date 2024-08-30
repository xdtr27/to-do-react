import "./App.module.css";
import { CirclePlus } from "lucide-react";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import Input from "./components/Input";
import TaskCard from "./components/TaskCard";
import { useEffect, useState } from "react";

type Task = {
  id: number;
  content: string;
  checked: boolean;
};

function App() {
 
const data = localStorage.getItem("taskList")
  ? JSON.parse(localStorage.getItem("taskList")!) // ! added to assert that the value is not null
  : [];

  const [tasks, setTask] = useState(data);
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleSetTask() {
    const inputContent = document.getElementById(
      "central-input"
    ) as HTMLInputElement;
    setTask([
      ...tasks,
      { id: tasks.length + 1, content: inputContent.value, checked: false },
    ]);
  }

  useEffect(() => {
    const completedList = tasks.filter((task: Task) => {
      if (task.checked) {
        return task;
      }
    });
    setCompletedTasks(completedList.length);

    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.inputBox}>
          <Input setTask={handleSetTask} />
          <button onClick={handleSetTask}>
            Criar <CirclePlus size={16} />
          </button>
        </section>
        <section className={styles.taskBox}>
          <header>
            <div>
              <p>Tarefas Criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>
                {tasks.length > 0
                  ? `${completedTasks} de ${tasks.length}`
                  : "0"}
              </span>
            </div>
          </header>
          <main className={styles.tasks}>
            {tasks.map((task: Task) => (
              <TaskCard
                taskList={tasks}
                setTaskList={setTask}
                id={task.id}
                key={task.id}
                content={task.content}
                checked={task.checked}
              />
            ))}
          </main>
        </section>
      </main>
    </>
  );
}

export default App;
