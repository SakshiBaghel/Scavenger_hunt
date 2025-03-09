import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component

import Home from './pages/Home'
import CreateHunt from './pages/CreateHunt'
import LiveHunt from './pages/LiveHunt'
import UpcomingHunt from './pages/UpcomingHunt'
import JoinHunt from './components/JoinHunt'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateHunt" element={<CreateHunt />} />
          <Route path="/LiveHunt" element={<LiveHunt />} />
          <Route path="/UpcomingHunt" element={<UpcomingHunt />} />
          <Route path="/JoinHunt/:huntId" element={<JoinHunt />} />
            
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
