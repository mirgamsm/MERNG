import React from 'react';

import './App.css';

import {BrowserRouter,

  Routes,
  Route,} from 'react-router-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from '@mui/system';


const client = new ApolloClient({
  uri: 'http://localhost:3700/graphql',
  cache: new InMemoryCache()
})
export default function App() {
  return (
    <>
    <ApolloProvider client={client}> 
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
    </>
  );
}
 