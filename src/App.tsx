import './App.css'
import Menu from './components/Menu'
import Simulator from './pages/Simulator'
import CWNsNearby from './pages/CWNsNearby'
import Theory from './pages/Theory'
import About from './pages/About'
import How from './pages/How'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// tutorial - when close popup, choose start tutorial or not 

function App() {
  
  return (
    <>
      <Router>
        <Menu />
        <Routes> 
                <Route path="/" element={<Simulator />} />
                <Route path="/cwnsnearby" element={<CWNsNearby />} />
                <Route
                    path="/theory"
                    element={<Theory />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/how"
                    element={<How />}
                />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
