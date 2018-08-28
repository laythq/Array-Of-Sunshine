import React from 'react'
import { History } from './history'
import { shallow, mount } from 'enzyme'

describe('history component', () => {
  it('returns a list of the user\'s searches', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3']
    const displaySuggestions = shallow(
      <History history={suggestions}/>)
    expect(displaySuggestions.findWhere(n => n.type() === 'div' && n.contains('suggestion1' && 'suggestion2' && 'suggestion3')))
  })
})
