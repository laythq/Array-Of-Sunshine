import React from 'react';
import { shallow, mount } from 'enzyme';
import { InputForm } from './inputform';

describe('input form component', () => {
  describe('array inputs and outputs', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<InputForm />);
    });

    it('should respond to change event and change state of input form component', () => {
      wrapper.find('#input').simulate('change', { target: { name: 'input', value: 'some_input' } });
      expect(wrapper.state('input')).toEqual('some_input');
    });
    it('should respond to change event and change state of input form component', () => {
      wrapper.find('#output').simulate('change', { target: { name: 'output', value: 'some_output' } });
      expect(wrapper.state('output')).toEqual('some_output');
    });
  });

  describe('language selector child', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<InputForm />);
    });

    it('sets its language to Javascript if selected in language selector child', () => {
      const javascriptButton = wrapper.find('button').at(0);
      javascriptButton.find('button').at(0).simulate('click');
      expect(wrapper.state().language).toEqual('javascript');
    });
    it('sets its language to Ruby if selected in language selector child', () => {
      const rubyButton = wrapper.find('button').at(1);
      rubyButton.find('button').at(0).simulate('click');
      expect(wrapper.state().language).toEqual('ruby');
    });
    it('sets its language to Python if selected in language selector child', () => {
      const pythonButton = wrapper.find('button').at(2);
      pythonButton.find('button').at(0).simulate('click');
      expect(wrapper.state().language).toEqual('python');
    });
  });

  // note - am still working on this test

  xit('sets the input/output when the submit button is clicked', () => {
    const mockSetInputOutput = jest.fn();
    const wrapper = shallow(<InputForm setInputOutput={mockSetInputOutput} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockSetInputOutput).toHaveBeenCalled();
  });
});
