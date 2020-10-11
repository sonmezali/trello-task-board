import React, {useState, useEffect} from 'react';
import './main.css';
import Board from './components/Board';


const App=()=> {
  const [boards,setBoards] = useState([
         { id: "b1", title:"Board 1" }
        ])
  const [cards,setCards] = useState([])
  const [reRender, setReRender]=useState(false)


//update dragged card's board id when moved to another board
const updateCard=(cardId, newBoardId)=>{   
    cards.find(card => card.id === cardId).boardId = newBoardId;       
    setCards(cards )
    localStorage.setItem('cards', JSON.stringify(cards ))      // each time cards change the board, all data saved in local storage     
    setReRender(!reRender)
    }

const handleAddTaskBoard=()=>{
  const newBoard={id:`b${boards.length+1}`, title:`Board ${boards.length+1}`}
  setBoards([...boards,newBoard])
  localStorage.setItem('boards', JSON.stringify([...boards,newBoard]))
  }

//when the page first renders it calls data from local storage
  useEffect(() => {
 const boardsStorage= localStorage.getItem('boards')
 const cardsStorage= localStorage.getItem('cards')
 boardsStorage&&setBoards(JSON.parse(boardsStorage))
 cardsStorage&&setCards(JSON.parse(cardsStorage))
  },[])      

  return (
    <div className="App">
      <header className="App-header">  
      <h3 className="header-title">Trello</h3>  
      </header>
      <main className="main">
        {boards.map(board =>
            <Board
              key={board.id}
              id={board.id}
              title={board.title} 
              setCards={setCards}
              className='task-board'
              cards={cards}
              filteredCards={cards.filter(c => c.boardId === board.id)}
              handleDrop={updateCard}
            />
        )}        
        <div className="add-board-btn" onClick={handleAddTaskBoard}><span>Add Board</span></div>
      </main>
      
    </div>
  );
}

export default App;
