import React from 'react';
import FormGroup from './FormGroup';
import { shallow } from 'enzyme';
import '../../../setupTests';

describe('FormGroup component', () => {
  it('renders without crashing', () => {
    shallow(<FormGroup />);
  });
});
