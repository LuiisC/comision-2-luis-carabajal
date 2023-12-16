import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
import Router from './Router'

import AuthProvider from "./providers/AuthProvider";
import Navbar from "./components/Navbar";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <BrowserRouter>
        <Navbar/>
        <Router />
        </BrowserRouter>
    </AuthProvider>
)