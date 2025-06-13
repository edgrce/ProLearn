import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpLectureAndStudent from "./pages/Signup-LectureandStudent";
import SignUpUniversity from "./pages/Signup-University"; // Buat file ini sesuai desain sign in

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpLectureAndStudent />} />
        <Route path="/signin" element={<SignUpUniversity />} />
      </Routes>
    </Router>
  );
}

export default App;