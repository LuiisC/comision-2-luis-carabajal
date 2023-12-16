import { Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home.jsx";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm.jsx";
import NotFoundPage from "./pages/404Page";
import PosteosPage from "./pages/PosteosPage.jsx";
import PrivateRoutes from "./components/PrivateRoutes";
import NewPosteo from "./pages/NewPosteo";
import MPosteoPage from "./pages/MPosteoPage.jsx";


function Router() {
    return (
      <Routes>
        {/* Protected Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/posteo/new" element={<NewPosteo />} />
          <Route path="/posteo/:posteoId" element={<MPosteoPage />} />
        </Route>
  
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/posteos" element={<PosteosPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
  
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }

export default Router