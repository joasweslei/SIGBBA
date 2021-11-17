import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showImage: false,
    };
  }

  toggle = () =>{
    this.setState({

      showImage:  !this.state.showImage,
    });
  }

  render(){
  return (
    <div className="App">
      <body>
      <header className="App-header">
        
      </header>
      <article className="App-article">
        <section className="App-section">
          <a href="" className="voltar">voltar</a>
          <button type="button">receber</button>
          <button type="button" className="salvar">salvar</button>
          <p className= "titulo">Ediçaõ de pedido</p>
         
        </section>
        <section className="App-section1">
          <button type="button" className="button1">+adicionar um agricultor</button>
        </section>
        <section className="App-section2">
          <h1>Alimentos</h1>
          <table>
            
            <tr>
              <th>Receber</th>
              <th>Finalidade</th>
              <th>Quantidade Solicitada</th>
              <th>Data De Entrega</th>
              <th>Quantidade Recebida</th>
              <th>Quantidade Restante</th>
              <th>Valor Unitario</th>
              <th>Valor Total</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          
          </table>
        </section>
      </article>
        <button type="button" className="adicionar">
         +

          </button>
      </body>
    </div>
  );
}
}
export default App;
