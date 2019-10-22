import React from 'react';
import './index.css';
import './App.css';
import { List } from './composition/list.js';
import STORE from './store.js'

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends React.Component {

  static defaultProps = {
    content: {
      lists: [],
      allCards: {},
    }
  }

  state = {
    content: STORE,
    };

    handleDeleteCard = (cardId) => {
      const { lists, allCards } = this.state.content;
  
      const newLists = lists.map(list => ({
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));
  
      const newCards = omit(allCards, cardId);
  
      this.setState({
        content: {
          lists: newLists,
          allCards: newCards
        }
      })
    };
  
    handleAddCard = (listId) => {
      console.log('ADD CARD')
      const newCard = newRandomCard()
  
      const newLists = this.state.content.lists.map(list => {
        if (list.id === listId) {
          return {
            ...list,
            cardIds: [...list.cardIds, newCard.id]
          };
        }
          return list;
      })
  
      this.setState({
        content: {
          lists: newLists,
          allCards: {
            ...this.state.content.allCards,
            [newCard.id]: newCard
          }
        }
      })
    };
 
  
  render() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {this.state.content.lists.map(item => (
            <List
              key={item.id}
              header={item.header}
              cards={item.cardIds.map(id => this.state.content.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />))}
      </div>
    </main>
  );
}
}

export default App;


