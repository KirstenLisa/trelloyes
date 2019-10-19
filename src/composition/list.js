import React from 'react'
import './list.css';
import Card from './card.js'


export class List extends React.Component {
    
    render() {

    return (
        <section className="List">
            <header className="List-header">
                <h2>{this.props.header}</h2>
            </header>
            <div className="List-cards">
                {this.props.cards.map(card =>
                    (<Card 
                    title={card.title}
                    cardContent={card.content}
                     />))}
            </div>
        </section>
    );

    }
}

export default List;