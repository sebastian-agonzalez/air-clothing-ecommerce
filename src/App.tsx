import React from 'react';
//CSS general
import './App.scss';
//pages
//import * as P from './pages/exportIndex';
//components
import * as C from './components/exportIndex';
//CSS library
import 'bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap.css';


//routes
import { GeneralRouting } from './routing/GeneralRouting';

//main
function App() {
  return (
    <>
      <C.Header />
      <div style={{ minHeight: '500px'}}>
        <GeneralRouting />
      </div>
      <C.Footer />
    </>
  );
}

export default App;
