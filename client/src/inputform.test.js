import React from 'react'
import { InputForm } from './inputform'
import { shallow, mount } from 'enzyme'

describe('input form component', () => {

  describe('array input', () => {
    it('should respond to change event and change state of input form component', () => {
      const wrapper = shallow(<InputForm />)
      wrapper.find('#input').simulate('change', {target: {name: 'input', value: 'some_input'}})
      expect(wrapper.state('input')).toEqual('some_input')
    })
  })

  describe('array output', () => {
    it('should respond to change event and change state of input form component', () => {
      const wrapper = shallow(<InputForm />)
      wrapper.find('#output').simulate('change', {target: {name: 'output', value: 'some_output'}})
      expect(wrapper.state('output')).toEqual('some_output')
    })
  })

  describe('language selector child', () => {
    it('sets its language to Javascript if selected in language selector child', () => {
      const wrapper = mount(<InputForm />)
      const javascriptButton = wrapper.find('button').at(0)
      javascriptButton.find('button').at(0).simulate('click')
      expect(wrapper.state().language).toEqual('javascript')
    })
    it('sets its language to Ruby if selected in language selector child', () => {
      const wrapper = mount(<InputForm />)
      const rubyButton = wrapper.find('button').at(1)
      rubyButton.find('button').at(0).simulate('click')
      expect(wrapper.state().language).toEqual('ruby')
    })
    it('sets its language to Python if selected in language selector child', () => {
      const wrapper = mount(<InputForm />)
      const pythonButton = wrapper.find('button').at(2)
      pythonButton.find('button').at(0).simulate('click')
      expect(wrapper.state().language).toEqual('python')
    })
  })

  // should this test be in Summary??
  // it('sets the input/output when the submit button is clicked', () => {
  //   const mockSetInputOutput = jest.fn();
  //   const wrapper = shallow(<InputForm setInputOutput={mockSetInputOutput} />);
  //   console.log(wrapper.debug())
  //   wrapper.find('button').at(0).simulate('click')
  //   expect(mockSetInputOutput).toHaveBeenCalled();
  // })

})
