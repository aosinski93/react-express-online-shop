import React from 'react';
import DeleteButton from './DeleteButton';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('Button component', () => {
  it('renders without crashing', () => {
    shallow(<DeleteButton />);
  });
})
