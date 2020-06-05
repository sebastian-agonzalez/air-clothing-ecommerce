import React from 'react';
//CSS general
import './App.css';
//pages
//import * as P from './pages/exportIndex';
//components
import * as C from './components/exportIndex';
//CSS library
import 'bulma/css/bulma.css'
//routes
import { Router } from 'react-router-dom';
import { GeneralRouting } from './routing/Routing'



function App() {
  return (
    <>
    <C.Header />
    <GeneralRouting />
    <C.Footer />
    </>
  );
}

export default App;
