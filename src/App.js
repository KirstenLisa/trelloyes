import React, { Component } from 'react';
import './index.css';
import './App.css';
import { List } from './composition/list.js';


class App extends React.Component {
  
  render() {

  const { content } = this.props

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {content.lists.map(item => (
            <List
              key={item.id}
              header={item.header}
              cards={item.cardIds.map(id => content.allCards[id])}
            />))}
      </div>
    </main>
  );
}
}

export default App;


