import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { ChessList } from "./ChessList";
import { ChessSingle } from "./ChessSingle";
import { ChessCreate } from "./ChessCreate";
import { ChessMod } from "./ChessMod";
import { ChessDel } from "./ChessDel";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} style={{textDecoration: "none"}}>
                <span className="nav-link">Sakkozók</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/uj-chess'} style={{textDecoration: "none"}}>
                <span className="nav-link">Új sakkozó</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<ChessList />} />
        <Route path="/chess/:chessId" exact element={<ChessSingle />} />
        <Route path="/uj-chess" exact element={<ChessCreate />} />
        <Route path="/mod-chess/:chessId" exact element={<ChessMod />} />
        <Route path="/del-chess/:chessId" exact element={<ChessDel />} />
      </Routes>
    </Router>
  );
}

export default App;
