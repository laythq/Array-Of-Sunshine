import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App component', () => {
  it('renders the Summary component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Summary').exists()).toBeTruthy();
  });
});
