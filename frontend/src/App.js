import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component

import Home from './pages/Home'
import CreateHunt from './pages/CreateHunt'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateHunt" element={<CreateHunt />} />
            
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
