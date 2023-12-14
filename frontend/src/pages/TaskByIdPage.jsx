import { useParams } from "react-router-dom"

export const TaskByIdPage = () => {

    const { taskId } = useParams()
  return (
    <div>El post con Id es: {taskId}</div>
  )
}
