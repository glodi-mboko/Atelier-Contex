import React, {useContext} from 'react';
import Book from '../components/Book'
import {BookContext} from '../context/BookContext'

const BookList = () => {

    const [books, setBooks] = useContext(BookContext)
    return (
        <div>
            {
                books.map(({author, title}) =>(
                    <div>
                        <Book author={author} title={title}/>
                    </div>
                ))
            }
        </div>
    );
}

export default BookList;
