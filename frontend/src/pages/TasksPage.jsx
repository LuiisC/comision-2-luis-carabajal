import { TaskItem } from "../components/TaskItem";

const taskList = [
  {
    id: 1,
    title: 'Tarea 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aliquam!',
    done: true,
  },
  {
    id: 2,
    title: 'Tarea 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum',
    done: false,
  },
  {
    id: 3,
    title: 'Tarea 3',
    description: 'Cum, aliquam!',
    done: false,
  }
];

export const TasksPage = () => {
  return (
    <div className="row">
      { taskList.map((task) => {
          return (
            <TaskItem key={task.id} title={task.title} description={task.description} done={task.done} />
          );
        })}
    </div>
  )
}