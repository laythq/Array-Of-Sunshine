import React from 'react'
import { InputForm } from './inputform'
import { shallow } from 'enzyme'

describe('input form component', () => {
  it('starts with an input of null', () => {
    const wrapper = shallow(<InputForm />)
    console.log(wrapper)
    const inputState = wrapper.state().input
    expect(inputState).toBe(null)
  })
})
