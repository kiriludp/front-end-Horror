import React from 'react';
import  '../styles/Header.css';
import header from '../styles/imgs/header.png'


function Header() {
    const styles = {
        header:{
            background: '#c1c6be'
            
        },
        h1:{
            fontSize: '50px'
            
        }
    }


return (
    <header className='header' style={{backgroundImage: `url(${header})` , backgroundPosition: "center"}}>
        <h1 style={styles.h1}>They're Comming to Get You</h1>
    </header>
);

}

export default Header;