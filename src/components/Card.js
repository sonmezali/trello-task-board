import React from 'react'


const Card=(props)=> {
const handleDragStart=(e)=>{
    const target=e.target;
    e.dataTransfer.setData('card_id',target.id); 
}

const handleDrop=(e)=>{
     e.preventDefault();
     const cardId = e.dataTransfer.getData('card_id');    
     const draggedCard=props.cards.find(item=>item.id===cardId)   
     props.cards.splice(props.cards.findIndex(item=>item.id===cardId),1)
     props.cards.splice(props.cards.findIndex(item=>item.id===props.id),0,draggedCard)    
     props.setCards(props.cards)
     localStorage.setItem('cards',props.cards)
 }

// const handleDragOver=(e)=>{
//     e.stopPropagation()  
// }

    return (
        <div 
        index={props.index}
        id={props.id}
        draggable
        className={props.className}
        onDragStart={handleDragStart}
        // onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
        {props.title}
            
        </div>
    )
}

export default Card;