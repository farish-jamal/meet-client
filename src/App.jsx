import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Register />} />
    </Routes>
  );
};

export default App;
