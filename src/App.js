import React, {useState, useEffect} from 'react'
import BookList from './pages/BookList';
import Navbar from './components/Navbar';
import { BookProvider } from './context/BookContext';
import { Route, Switch } from 'react-router';
import AddBook from './pages/AddBook';



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
        <Switch>
          <Route exact path="/">
            <BookList />
          </Route>
          <Route path="/add-book">
            <AddBook/>
          </Route>
          <Route path="/*">
            <h1>Error 404</h1>
          </Route>
        </Switch>
        
      </div>
    </BookProvider>
    
  )
}

export default App;
