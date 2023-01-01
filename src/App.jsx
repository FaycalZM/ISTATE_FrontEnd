import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageAfter from "./pages/HomePageAfter";
import SingleElement from "./pages/SingleElement";
import Layout from "./components/shared/Layout";
import HomePageBefore from "./pages/HomePageBefore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/before" element={<HomePageBefore />} />
          <Route path="/after" element={<HomePageAfter />} />
          <Route path="/single" element={<SingleElement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
