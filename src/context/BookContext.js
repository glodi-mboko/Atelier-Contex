import {createContext, useState} from 'react'

//magasin
export const BookContext = createContext();

//fournisseur(entourer app)
export const BookProvider = ({children})=>{
    const [books, setBooks]= useState([])
    return(
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}