import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { ProfilePage } from "./pages/ProfilePage"
import { TasksPage } from "./pages/TasksPage"
import { TaskByIdPage } from "./pages/TaskByIdPage"

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tareas" element={<TasksPage/>}/>
            <Route path="/tareas/:taskId" element={<TaskByIdPage/>}/>
            <Route path="/perfil" element={<ProfilePage/>}/>
        </Routes>
    )
}