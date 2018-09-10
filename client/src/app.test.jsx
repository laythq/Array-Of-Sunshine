import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme'
configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders the Summary component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Summary').exists()).toBeTruthy();
  });
});
