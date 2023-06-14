import React from 'react';
import './header.css'
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  return (
    <div className='header'>
      <Navbar />
        <div className='hero'>
        <h2>The</h2>
        <h1 className='heading'>Educated Approach</h1>
        <h2>To Modren Mortgage Lending</h2>
        </div>
        
    </div>
  )
}
