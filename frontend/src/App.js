import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and component

 import Home from './pages/Home'
import UploadPhoto from "./pages/UploadPhoto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPhoto />} /> {/* ✅ Naya Route */}
            
        </Routes>
      </div>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

