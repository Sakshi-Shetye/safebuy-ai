// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Default route → shows Login */}
//         <Route path="/" element={<Login />} />

//         {/* Explicit routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/Home" element={<Home />} />
//          <Route path="/Home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Asking from "./pages/Asking";
import Scan from './pages/Scan';
import Report from './pages/Report'
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Temporarily change this line */}
        {/* <Route path="/" element={<h1>Hello World!</h1>} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/Asking" element={<Asking />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}
export default App;