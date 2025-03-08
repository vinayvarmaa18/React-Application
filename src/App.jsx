import './App.css'
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import Employees from './Employees';
import About from './About';
import ContactUS from './ContactUS';
import Home from './Home';
import TeamPage from './Team';

function App() {

  return (
    <>
    <div className='text-3xl'>
    <HeaderComponent/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<TeamPage />}/>
        </Route>
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <FooterComponent/> */}
    </div>
    </>
  )
}

export default App;