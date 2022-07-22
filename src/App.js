import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Index';
import About from './components/About';
//import Contact from './components/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* 
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        */}
        </Route>
      </Routes>
    </>
  )
}

export default App;
