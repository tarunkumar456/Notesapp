import React from 'react';
import {
  ChakraProvider,
  
  theme,
} from '@chakra-ui/react';

import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { createContext, useState } from 'react';

export const usercontext = createContext(null);
function App() {

  const [data, setdata] = useState({ Title: '', Description: '' });

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <usercontext.Provider value={{data,setdata}}>
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
            {/* <Route path={'/add'} element={<Add />}></Route> */}
          </Routes>
        </usercontext.Provider>

      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
