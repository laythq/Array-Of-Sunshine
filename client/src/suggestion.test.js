import React from 'react'
import { CodeSuggestion } from './suggestion'
import { shallow } from 'enzyme'

describe('suggestion component', () => {
  it('returns a new suggestion', () => {
    const wrapper = shallow(<CodeSuggestion />)
    console.log(wrapper)
    expect(wrapper.type()).to.equal('div')
  })
})
