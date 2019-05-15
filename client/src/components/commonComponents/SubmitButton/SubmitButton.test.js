import React from 'react';
import SubmitButton from './SubmitButton';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('SubmitButton component', () => {
  it('renders without crashing', () => {
    shallow(<SubmitButton />);
  });
})