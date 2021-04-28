import React, {useState, useEffect} from 'react'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import { BookProvider } from './context/BookContext';



const App = ()=>
{
  /* const [init, setInit]= useState([]);
  const [copyInit, setCopyInit] = useState([])
  
  useEffect(()=>{

    fetch("http://jsonplaceholder.typicode.com/users")
    .then((responses)=> responses.json())
    .then((dataSet)=>{
      let value = dataSet.map(({id, name, email})=>{
        return({id, name, email})
      })
      setInit(value)
      setCopyInit(value)
    })
  }, []) */
  
  return(
    <BookProvider>
      <div>
        <Navbar />
        <BookList />
      </div>
    </BookProvider>
    
  )
}

export default App;
