## About the project:

This project was a project for the application of Junior UX Developer role. In this project, React JS Library was used to build it. 
Project goal is to create task for users and to allow users to move task cards from a board to another.

## Installation:

1. npm install
2. npm start

GitHub Links of the Project:
The source code of the project is in this GitHub repository:

https://github.com/sonmezali/trello-task-board

## Architecture:

First of all, I determined what I needed to built this project. Mainly, I specified two main components (Board and Card) and some functionality such as to click button to add card and board. 
Basically, I started this process by using npx create-react-app react boilerplate. In here, the main component is App.js. 
The other components are run in to App components. Moreover, App component is rendered in to ‘div’ tag with “root” id in index.html file.

```
            ReactDOM.render(
                <React.StrictMode>
                <App />
                </React.StrictMode>,
                document.getElementById('root')
            ); 
```

Then, I created Board and Card components. Board component includes every single board which is styled “div” which the task cards are nested underneath. 
In Card component, there are the task cards which are created by user by clicking “Add Card” button. These are also “div” tags. 
I gave a _draggable_ feature to every single card to be easily moved to another board and an _ondrop_ feature to every single board component to allow cards to be nested in. 
On this point, all created cards’ details and boards’ details are kept in the states. 
In order to carry out this, I used useState() method which is a Hook that is introduced by React in the latest versions. 
I will explain how useState() works in the React Hooks session. Following codes show the state structure in the project: 

```
            const [boards,setBoards] = useState([
            { id: "b1", title:"Board 1" }
            ]);
            const [cards,setCards] = useState([]);
            const [reRender, setReRender]=useState(false);

```

I wrote three functions to perform the process of moving cards. First function is in the Card component.
This function helps me to select the target card which is to be moved and its detail such as its id. The function is called handleDragStart.
This function is based on _dragstart_ attribute of basic HTML element. The _dragstart_ attribute is given to _draggable_ element. 

```
            const handleDragStart = (e) => {
                const target = e.target;
                e.dataTransfer.setData('card_id',target.id); 
            }

```

The second function is the Board component. The function is called handleDrop which corresponds to drop attribute in basic HTML element.
This is given to the target which _draggable_ element is nested. Following codes show structure of handleDrop function. 

``` 
            const handleDrop = (e) => {
                e.preventDefault();
                const cardId = e.dataTransfer.getData('card_id'); 
                props.handleDrop(cardId, props.id) 
            }

```

The third function is in App component. This function is called updateCard. This function is used to update card details when it passes from a board to another. 
This function is also called in to handleDrop function.

```
            const updateCard = (cardId, newBoardId) => { 
                cards.find(card => card.id === cardId).boardId = newBoardId; 
                setCards(cards );
                localStorage.setItem('cards', JSON.stringify(cards )) ;
                setReRender(!reRender)
            }

```

In this function, I used ‘localStorage.setItem()’ property to store states. Because, I was asked to save the data for later. 
LocalStorage always keeps data unless data is cleaned up manually. Whenever user close and open the browser, user see last changes. 
In addition to this, localStorage keeps only string data, therefore I use ‘_JSON.stringfy()_’ method to convert all data to a string. 
However, in this project, stored states were originally objects. In order to convert data from string to object, I used ‘_JSON.parse()_’ method. 
Also I wanted to run this method as soon as the browser is opened. For this, I took helps form another Hook which is called useEffect(). 
I will also explain useEffect() in React Hooks section. Basically, It runs codes as soon as browser is opened. Following codes show how it works.

``` 
            useEffect(() => {
                const boardsStorage = localStorage.getItem( 'boards' );
                const cardsStorage = localStorage.getItem( 'cards' );
                boardsStorage&&setBoards(JSON.parse( boardsStorage ));
                cardsStorage&&setCards(JSON.parse( cardsStorage ))
            },[]) 

```

### React Hooks 

In this project I took advantages of using React Hooks. React Hooks are introduced by React with version 16.8. I used two very important hooks. 
Those are useState() and useEffect(). So, what do they do? In react there are two type of components: function component and class component. 
In previous versions function component was also called stateless component but now function component can use state with React Hooks. 
On this point useState() helps us to use state in functional component. Following codes show how App component's structure would be if I didn't use react hooks

```

        class App extends Component{
            constructor(props){
                super(props);
                this.state = {
                boards:{ id: "b1", title:"Board 1" },
                cards:()
                }
            }
        }

```

In addition to this, each component has a lifecycle in react. This consists of three phases: _Mounting_, _Updating_,_ Unmounting_. 
In the previous versions, In order to complete this lifecycle, There were some method to use. componentDidMount() method one of them. 
This method is run as soon as component rendered. Now, useEffect() hook does same thing. useEffect() is also run immediately. 
The useEffect() method is not only equivalent of componentDidMount() method but it is also more than.

```
            useEffect(() => {
                const boardsStorage = localStorage.getItem( 'boards' );
                const cardsStorage = localStorage.getItem( 'cards' );
                boardsStorage&&setBoards(JSON.parse( boardsStorage ));
                cardsStorage&&setCards(JSON.parse( cardsStorage ));
            },[]) 

            =>

            componentDidMount() {
                const boardsStorage = localStorage.getItem( 'boards' );
                const cardsStorage = localStorage.getItem( 'cards' );
                boardsStorage&&this.state.cards = JSON.parse( boardsStorage );
                cardsStorage&&this.state.cards = JSON.parse( cardsStorage )
            }

```
## Design

I used pure CSS code to design the project instead of any framework. I decided to use a _monochromatic_ color scheme and consistent background picture. 
I implemented a flexbox layout model to make the page responsive. 



## What can be improved


- I realized that naming is not very good. Naming to variables could have been better.
- I am not quite satisfied with the function which is used for sorting the cards. It can be improved. 

## Developer

            Ali SONMEZ
            React Developer
            
            https://github.com/sonmezali/
            

