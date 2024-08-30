import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from './pages/Sidebar';
import {Home} from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Submit } from './pages/Submit';
import { Logout } from './pages/Logout';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/submit" element={<Submit/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={ <h1>Page not found</h1> } />
        </Routes>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
