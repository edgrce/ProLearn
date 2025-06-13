import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUpUniversity from "./pages/Signup-University";
import SignUpLectureAndStudent from "./pages/Signup-LectureandStudent";

function App() {
  return (
    <>
      {/* <SignUpUniversity /> */}
      <SignUpLectureAndStudent />
    </>
  );
}

export default App;