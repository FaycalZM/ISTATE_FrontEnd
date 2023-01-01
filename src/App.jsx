import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageAfter from "./pages/HomePageAfter";
import SingleElement from "./pages/SingleElement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageAfter />} />
        <Route path="/single" element={<SingleElement />} />
      </Routes>
    </BrowserRouter>
  );
}
