import React from 'react';
import Booklist from './components/Booklist'
import {BrowserRouter, Route,Link} from 'react-router-dom'
import axios from 'axios'

const getDataFromAPI= async keyword=>{
  const request_url="https://www.googleapis.com/books/v1/volumes?q=intitle:"
  const result =await axios.get(`${request_url}${keyword}`)
  return result;
}


const App =()=>{
  const languages=["react","Vue","Angular"]


  return(
    <BrowserRouter>
    <div>
      <h1>react app</h1>

      <ul>
        <li><Link to="/">React</Link></li>
        <li><Link to="/vue">vue</Link></li>
        <li><Link to="/angular">angular</Link></li>
      </ul>
      
      <Route exact
             path="/" 
             render={
               props=> 
               <Booklist 
               languages={languages[0]}
               getData={keyword=>getDataFromAPI(keyword)}
               />
               }/>
       <Route exact
             path="/vue" 
             render={
               props=> 
               <Booklist 
               languages={languages[1]}
               getData={keyword=>getDataFromAPI(keyword)}
               />
               }/>
        <Route exact
             path="/angular" 
             render={
               props=> 
               <Booklist 
               languages={languages[2]}
               getData={keyword=>getDataFromAPI(keyword)}
               />
               }/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;