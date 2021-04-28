import React, {useContext} from 'react';
import navStyles from './styles/Navbar.module.css'
import {BookContext} from '../context/BookContext'

const Navbar = () => {
    const [books] = useContext(BookContext)
    return (
        <div className={navStyles.container}>
            <h3>My Library</h3>
            <p>Number of books : {books.length}</p>
        </div>
    );
}

export default Navbar;
