import React from 'react';
import './App.css';
import './Header'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Voltar a dormir', 'Acordar', 'Tomar café de novo'];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
        <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
      </div>
    );
  }
}

export default App;