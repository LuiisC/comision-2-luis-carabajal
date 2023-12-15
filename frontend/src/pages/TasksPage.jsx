import { TaskItem } from "../components/TaskItem";
import { useState, useEffect } from "react";

export const TasksPage = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
      });
  }, []);

  return (
    <div className="row">
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            description={"Lorem ipsum dolor sit amet"}
            done={task.completed}
          />
        );
      })}
    </div>
  );
};