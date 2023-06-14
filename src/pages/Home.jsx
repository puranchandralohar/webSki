import React from 'react'
import { Header } from '../Components/Header/Header';
import { Contact } from '../Components/Contact/Contact';
import { Footer } from '../Components/Footer/Footer';
import { Imagecard } from '../Components/Imagecard/Imagecard';

import './home.css';


export const Home = () => {
  return (
    <div className='container'>
    <Header />
    <div className='section'>
      <div className='labels'>
        <h4>Process</h4>
        <h2>How it Works</h2>
        <p>Step by Step to Home buying process</p>
      </div>
    </div>
    <Imagecard/>
    <Contact />
    <Footer />
    </div>
  )
}
