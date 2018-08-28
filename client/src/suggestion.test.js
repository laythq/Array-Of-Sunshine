import React from 'react'
import { CodeSuggestion } from './suggestion'
import { shallow } from 'enzyme'

describe('suggestion component', () => {
  it('returns a new suggestion when the user inputs', () => {
    const wrapper = shallow(
      <CodeSuggestion
        input="input"
        output="output"
        language="language"
        suggestion="suggestion"
       />)
    expect(wrapper.find('div').text()).toEqual('language: input > output = suggestion')
  })
})
