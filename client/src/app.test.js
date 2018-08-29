import React from 'react'
import { App } from './app'
import { shallow, mount } from 'enzyme'

describe('App component', () => {
  it('renders the Summary component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Summary').exists()).toBeTruthy()
  })
})
