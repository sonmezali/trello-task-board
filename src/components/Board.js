import React from 'react'
import Card from "./Card"

const Board=(props)=> {
  
    const handleDrop=(e)=>{
        e.preventDefault();
        const cardId = e.dataTransfer.getData('card_id');       
        props.handleDrop(cardId, props.id)         
        }

    const handleDragOver=(e)=>{
        e.preventDefault(); 
        }

    const handleAddCard=()=>{
        const newCard= { id:`c${props.cards.length+1}`, title: `Task ${props.cards.length+1}`, boardId: `${props.id}` }
        props.setCards([...props.cards,newCard]);
        localStorage.setItem('cards', JSON.stringify([...props.cards,newCard]))
        }

    return (
        <div id={props.id}      
            className={props.className}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
        <div className="board-title">{props.title}</div>
            {props.filteredCards.map(card => <Card key={card.id} title={card.title}  id={card.id}
            cards={props.cards} setCards={props.setCards}  
            className="card"/>)}
            <div className="add-card-btn"  onClick={handleAddCard}><span>+Add Card</span></div>
        </div>
    )
}

export default Board
