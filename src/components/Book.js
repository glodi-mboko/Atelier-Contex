import React, {useContext} from 'react';
import bookStyles from './styles/Book.module.css'
import {BookContext} from '../context/BookContext'
const Book = ({title, author, id}) => {
    const [books, setBooks] = useContext(BookContext)
    
    const handleDelete =()=>{
        const updateBooks = books.slice()
        updateBooks.splice(id, 1);
        setBooks(
            [...updateBooks]
        )
    }
    return (
        <div className={bookStyles.book}>
            <strong>{title} &rarr;</strong>
            <span>{author}</span>
            <button onClick={handleDelete} className={bookStyles.btn}>Enlever</button>
        </div>
    );
}

export default Book;
