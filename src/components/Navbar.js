import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import navStyles from './styles/Navbar.module.css'
import {BookContext} from '../context/BookContext'

const Navbar = () => {
    const [books] = useContext(BookContext)
    return (
        <div className={navStyles.container}>
            <h3><Link to="/">My Library</Link></h3>
            <h3><Link to="/add-book">Add new Book</Link></h3>
            <p>Number of books : {books.length}</p>
        </div>
    );
}

export default Navbar;
