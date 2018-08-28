import React from 'react'
import { InputForm } from './inputform'
import { mount, shallow } from 'enzyme'

describe('input form component', () => {

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

  it('sets a language when the submit button is clicked', () => {
    const mockSetInputOutput = jest.fn();
    const wrapper = shallow(<InputForm setInputOutput={mockSetInputOutput} />);
    console.log(wrapper.debug())
    wrapper.simulate('submit')
    expect(mockSetInputOutput).toHaveBeenCalled();
  })

})
