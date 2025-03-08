import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter basename="/React-frontend-Application/">
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
    </BrowserRouter>
    </div>
    </>
  )
}

export default App;