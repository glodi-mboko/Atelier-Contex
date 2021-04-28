import React from 'react';
import {useContext} from 'react'
import {BookContext} from '../context/BookContext'

const AddBook = () => {

    const [books, setBooks] = useContext(BookContext);
    
    const handleSubmit =(event)=>
    {
        event.preventDefault()
        const newItem = []
        //const author = event.currentTarget
        for(let i=0; i< (event.currentTarget.length - 1); i++)
        {
            newItem.push(event.currentTarget[i].value)
        }
        setBooks(
            books.push({author:newItem[0], title:newItem[1]})
        )
        console.log(books);

    }
    const handleChange = (event)=>
    {
        const newBook = event.currentTarget.value
        //console.log(event.name.currentTarget.value)
    }

    return (
        <div>
            <h1>Ajouter un livre</h1>
            <form onSubmit={handleSubmit}>
                <input name="inputAuthor" type='texte' placeholder='Author of book'/>
                <input name='book' onChange={handleChange} type='texte' placeholder='Book title'/>
                <button>Add Book</button>
            </form>
            
        </div>
    );
}

export default AddBook;
