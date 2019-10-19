import React from 'react'
import './card.css';


export class Card extends React.Component {
    
    render() {

    return (
        <div className="Card">
         <button type="button">delete</button>
         <h3>{this.props.title}</h3>
         <p>{this.props.cardContent}</p>
      </div>
    );

    }
}

export default Card;