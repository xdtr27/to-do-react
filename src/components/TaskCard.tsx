import { Trash2 } from "lucide-react";
import styles from "./TaskCard.module.css";
import Checkbox from "./Checkbox";
import { useState } from "react";
import TaskContent from "./TaskContent";

type TaskListProps = {
  id: number;
  content: string;
  checked: boolean;
};

type TaskCardProps = {
  id: number;
  taskList: [TaskListProps];
  setTaskList: ([]) => void;
  content: string;
  checked: boolean;
};

export default function TaskCard(props: TaskCardProps) {
  const { content, checked, taskList, id, setTaskList } = props;

  const [taskChecked, setTaskChecked] = useState(checked);

  function handleCheck() {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          console.log({...task, checked: !taskChecked})
          return { ...task, checked: !taskChecked };
        }
        return task;
      })
     
    );
    // taskList.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, checked: !taskChecked };
    //   }
    //   return task;
    // })

    setTaskChecked(!taskChecked); // Toggle checkbox state when clicked on it. This updates the state in the parent component.
  }

  function handleDelete() {
    setTaskList(taskList.filter((task) => task.id !== id)); // Remove the task from the list when clicked on the delete icon. This updates the state in the parent component.
  }

  return (
    <article className={styles.task}>
      <div className={styles.taskText}>
        <Checkbox checkFunction={handleCheck} checked={taskChecked} />
        <TaskContent content={content} risky={taskChecked} />
      </div>
      <div className={styles.deleteIcon} onClick={handleDelete}>
        <Trash2 size={14} />
      </div>
    </article>
  );
}
