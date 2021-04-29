import React from 'react';
import {useContext} from 'react'
import {BookContext} from '../context/BookContext'

const AddBook = () => {

    const [books, setBooks] = useContext(BookContext);
    
    const handleSubmit =(event)=>
    {
        event.preventDefault()
        const newItem = []
        
        for(let i=0; i< (event.currentTarget.length - 1); i++)
        {
            newItem.push(event.currentTarget[i].value)
            event.currentTarget[i].value =''
        }
        setBooks(
            [...books, {author:newItem[0], title:newItem[1]}]
        )

    }

    return (
        <div>
            <h1>Ajouter un livre</h1>
            <form onSubmit={handleSubmit}>
                <input name="inputAuthor" type='texte' placeholder='Author of book'/>
                <input name='book' type='texte' placeholder='Book title'/>
                <button>Add Book</button>
            </form>
            
        </div>
    );
}

export default AddBook;
