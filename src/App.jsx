import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageAfter from "./pages/HomePageAfter";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageAfter />} />
      </Routes>
    </BrowserRouter>
  );
}
