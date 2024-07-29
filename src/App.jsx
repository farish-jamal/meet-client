import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Protected from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Register />} />
      <Route path="/" element={<Protected element={<Home />} />} />
    </Routes>
  );
};

export default App;
