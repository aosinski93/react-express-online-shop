import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import './setupTests';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
