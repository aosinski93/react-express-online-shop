import React from 'react';
import Loader from './Loader';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('Loader component', () => {
  it('renders without crashing', () => {
    shallow(<Loader />);
  });
});