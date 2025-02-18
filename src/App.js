import './App.css';
import HomeLayout from './Components/Layout';
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Resume from './Components/Resume';
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <HomeLayout >
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </HomeLayout>
    </div>
  );
}

export default App;
