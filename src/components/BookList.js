import React, {useContext} from 'react';
import Book from './Book'
import {BookContext} from '../context/BookContext'

const BookList = () => {

    const [books, setBooks] = useContext(BookContext)
    return (
        <div>
            {
                books.map(({author, title}, id) =>(
                    <div>
                        <Book author={author} title={title} key={id}/>
                    </div>
                ))
            }
        </div>
    );
}

export default BookList;
