import { BrowserRouter, Routes, Route } from "react-router-dom";
import PoliticianList from "./components/PoliticianList";
import PoliticianProfile from "./components/PoliticianProfile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PoliticianList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/politician/:id"
          element={
            <ProtectedRoute>
              <PoliticianProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
