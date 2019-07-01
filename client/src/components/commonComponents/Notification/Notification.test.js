import React from 'react';
import Notification from './Notification';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('Notification component', () => {
  it('renders without crashing', () => {
    shallow(<Notification />);
  });
});