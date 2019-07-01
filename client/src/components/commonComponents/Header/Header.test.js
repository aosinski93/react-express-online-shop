import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import '../../../setupTests';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('should be selectable by class "header"', function() {
    expect(shallow(<Header />).is(".header")).toBe(true);
  });
});