import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import '../styles/Footer.css'

export default function Footer() {
    return (
      <MDBFooter className='text-center' color='white' bgColor='dark'>
    
        <div className="foot">
          Made with Every Spooky Intention for Your Enjoyment<span role="img" aria-label="scary">😱</span>
          </div>
       
       
      </MDBFooter>
    );
  }