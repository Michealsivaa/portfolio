import './App.css';
import HomeLayout from './pages/homeLayout/homeLayout';
import { Route, Routes} from 'react-router';
import About from './pages/about/about';

function App() {
  // const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
