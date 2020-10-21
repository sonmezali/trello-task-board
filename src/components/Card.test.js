import React from 'react';
import Card from './Card';
import ReactDom, {unmountComponentAtNode} from 'react-dom';
import renderer from 'react-test-renderer';



describe('test Card component', () => {

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
      ReactDom.render(<Card/>, div);
    });
  
    test('matches snapshot', () => {
      const tree = renderer.create(<Card/>).toJSON();
      expect(tree).toMatchSnapshot();
    })
   
})