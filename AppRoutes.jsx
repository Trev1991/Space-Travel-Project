import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Spacecrafts from "../pages/Spacecrafts/Spacecrafts.jsx";
import Spacecraft from "../pages/Spacecraft/Spacecraft.jsx";
import Build from "../pages/Build/Build.jsx";
import Planets from "../pages/Planets/Planets.jsx";

function Shell({ children }) {
  return (
    <div className="container">
      <header className="site-header">
        <div className="brand">Space Travel</div>
        <nav className="stack" style={{ gridAutoFlow: "column" }}>
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/spacecrafts">Spacecrafts</Link>
          <Link className="btn" to="/planets">Planets</Link>
        </nav>
      </header>
      <main className="stack">{children}</main>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Shell><Home /></Shell>} />
      <Route path="/spacecrafts" element={<Shell><Spacecrafts /></Shell>} />
      <Route path="/spacecrafts/build" element={<Shell><Build /></Shell>} />
      <Route path="/spacecrafts/:id" element={<Shell><Spacecraft /></Shell>} />
      <Route path="/planets" element={<Shell><Planets /></Shell>} />
      {/* redirect unknown routes → Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
