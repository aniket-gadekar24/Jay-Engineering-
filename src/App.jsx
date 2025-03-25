
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Client from './pages/Client'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'
import Product from './pages/Product'
import Services from './pages/Services'
import TopButton from './components/TopButton'

function App() {
  

  return (
    <div className=''>
      
      <div >
    <Header/>
    {/* <Home/>
    <About/>
    <Services/>
    <Product/>
    <Client/>
    <Contact/> */}
    
    <section id='home'>
      <Home/>
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='services'>
      <Services/>
    </section>
    <section id='client'>
      <Client/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
    <section>
      <TopButton/>
    </section>
    

    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/client' element={<Client/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Footer/> 
    <TopButton/>
    <TopButton/>
      </div>
    </div>
  )
}

export default App
