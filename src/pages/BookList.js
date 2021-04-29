import React, {useContext} from 'react';
import Book from '../components/Book'
import {BookContext} from '../context/BookContext'

const BookList = () => {

    const [books] = useContext(BookContext)
    return (
        <div>
            {
                books.map(({author, title}, index) =>(
                    <div>
                        <Book author={author} title={title} id={index} key={index}/>
                    </div>
                ))
            }
        </div>
    );
}

export default BookList;
