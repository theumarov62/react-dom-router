import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CardDetail from "./CardDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
