import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleElement from "./pages/SingleElement";
import Layout from "./components/shared/Layout";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route
            path="offers/:oid"
            element={
              <ProtectedRoute>
                <SingleElement />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
