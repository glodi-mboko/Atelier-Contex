import {createContext, useState} from 'react'

//magasin
export const BookContext = createContext();

//fournisseur(entourer app)
export const BookProvider = ({children})=>{
    const [books, setBooks]= useState([
        {
            author:'JRR Tolkien',
            title:'Le seigneur',
        },
        {
            author:'Dale carnegie',
            title:'comment se faire les amis',
        },
        {
            author:'Carol Lavenant',
            title:'Jamais loin de Cyprès',
        },
    ])
    return(
        <BookContext.Provider value={[books, setBooks]}>
            {children}
        </BookContext.Provider>
    )
}