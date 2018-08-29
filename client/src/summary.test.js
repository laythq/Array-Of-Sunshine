import React from 'react'
import { Summary } from './summary'
import { shallow, mount } from 'enzyme'

describe('setInputOutput', () => {
  it('changes the input and output states', () => {
    const wrapper = shallow(<Summary />)
    const inst = wrapper.instance();
    inst.setInputOutput('input', 'output')
    expect(inst.state.input).toEqual('input')
  })
})

describe('setLanguage', () => {
  it('changes the language state', () => {
    const wrapper = shallow(<Summary />)
    const inst = wrapper.instance();
    inst.setLanguage('language')
    expect(inst.state.language).toEqual('language')
  })
})

describe('setSuggestion', () => {
  it('updates the language state', () => {
    const wrapper = shallow(<Summary />)
    const inst = wrapper.instance();
    inst.setSuggestion('suggestion')
    expect(inst.state.suggestion).toEqual('suggestion')
  })
})

describe('log suggestion', () => {
  it('logs a suggestion in the state', () => {
    const wrapper = shallow(<Summary />)
    const inst = wrapper.instance();
    inst.logSuggestion('language', 'input', 'output', 'code')
    expect(inst.state.history).toContain('language: input > output = code')
  })
})
