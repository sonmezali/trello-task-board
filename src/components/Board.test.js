import React from 'react';
import ReactDom,{unmountComponentAtNode} from 'react-dom';
import Board from './Board'
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';




describe('test Board component', () => {

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
    ReactDom.render(<Board></Board>, div);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Board></Board>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders button correctly', () => {
    const {getByTestId} = render(<Board></Board>)
    expect(getByTestId('add-card')).toHaveTextContent('+Add Card')    
  })

})

