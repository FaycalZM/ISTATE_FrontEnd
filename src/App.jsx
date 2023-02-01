import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageAfter from "./pages/HomePageAfter";
import SingleElement from "./pages/SingleElement";
import Layout from "./components/shared/Layout";
import HomePageBefore from "./pages/HomePageBefore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageBefore />} />
          <Route path="home" element={<HomePageAfter />} />
          <Route path="single" element={<SingleElement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
