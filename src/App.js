import React, { Component } from 'react';
import './css/App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import {validarPresupuesto} from './helper';
import ControlPresupuesto from './componentes/ControlPresupuesto';

class App extends Component {
  state = {
    presupuesto: '',
    restante: '',
    gastos: {}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto(){
    let presupuesto = prompt('Cual es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto,
        restante : presupuesto
      })
    }else{
      this.obtenerPresupuesto();
    }
  }

  agregarGasto = (gasto) =>{
    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto;

    this.restarPresupuesto(gasto.cantidadGasto);

    this.setState({
      gastos : gastos,

    })
  

  }

  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);

    //tomar una copia del state actual
    let restante = this.state.restante;
    //lo restamos
    restante -= restar;

    restante = String(restante);
    //agregamos el nuevo state
    this.setState({
      restante
    })
  }

  render() {
    return (
      <div className='App container'>
        <Header titulo='Gasto Semanal'/>
        <div className='contenido-principal contenido'>
          <div className='row'>

            <div className='one-half column'>
              <Formulario agregarGasto={this.agregarGasto}/>
            </div>

            <div className='one-half column'>
              <Listado gastos={this.state.gastos}/>
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>

          </div>
        </div>
      </div>
     
    );
  }
}

export default App;
