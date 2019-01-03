import React, { Component } from 'react';
import './css/App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <Header titulo='Gasto Semanal'/>
        <div className='contenido-principal contenido'>
          <div className='raw'>

            <div className='one-half column'>
              <Formulario/>
            </div>

            <div className='one-half column'>
            
            </div>

          </div>
        </div>
      </div>
     
    );
  }
}

export default App;
