import { TaskItem } from "../components/TaskItem";
import { useTask } from "../hooks/useTask";

export const TaskByIdPage = () => {
  const { task } = useTask();

  return (
    <div>
      {task?.title ? (
        <TaskItem
          key={task.id}
          title={task.title}
          description={"Lorem ipsum dolor sit amet"}
          done={task.completed}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};