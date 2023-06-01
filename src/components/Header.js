import React from 'react';

import '../styles/Header.css'

function Header() {
    const styles = {
        header:{
            background: '#c1c6be'
        },
        h1:{
            fontSize: '100px'
        }
    }


return (
    <header className='header' style={styles.header}>
        <h1 style={styles.h1}>Do you like scary movies?</h1>
    </header>
);

}

export default Header;