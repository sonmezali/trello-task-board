import React from 'react';
import ReactDom,{unmountComponentAtNode} from 'react-dom';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App'



describe('test App component', () => {
  let container = null;
  beforeEach(() => {  
    container = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<App/>, div);
  });

  test('matches snapshot', () => {
      const tree = renderer.create( <App/> ).toJSON();
      expect(tree).toMatchSnapshot();   
  });

  test('renders button correctly', () => {
      const { getByTestId } = render( <App/> )
      expect(getByTestId('add-board')).toHaveTextContent('Add Board')    
  })
})

    