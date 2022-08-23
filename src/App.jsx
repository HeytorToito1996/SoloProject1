import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import './icons.css'
//import './dist.css'
import Header from '../Components/Header'
import About from '../Components/About'
import Interests from '../Components/Interests'
import Footer from '../Components/Footer'
import SocialMedia from '../Components/SocialMedia'

function App() {
   return(
      <div className="container"> 
         <Header/>
         <About/>
         <Interests/>
         <SocialMedia/>
      </div>
   )
}


export default App
