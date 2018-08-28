import React from 'react'
import { LanguageSelector } from './languageselector'
import { shallow } from 'enzyme'

describe('language selector component', () => {

  it('selects a language when button 1 is clicked', () => {
    const mockSelectLanguage = jest.fn();
    const wrapper = shallow(<LanguageSelector selectLanguage={mockSelectLanguage} />);
    wrapper.find('button').at(0).simulate('click')
    expect(mockSelectLanguage).toHaveBeenCalled();
  })

  it('selects a language when button 2 is clicked', () => {
    const mockSelectLanguage = jest.fn();
    const wrapper = shallow(<LanguageSelector selectLanguage={mockSelectLanguage} />);
    wrapper.find('button').at(1).simulate('click')
    expect(mockSelectLanguage).toHaveBeenCalled();
  })

  it('selects a language when button 3 is clicked', () => {
    const mockSelectLanguage = jest.fn();
    const wrapper = shallow(<LanguageSelector selectLanguage={mockSelectLanguage} />);
    wrapper.find('button').at(2).simulate('click')
    expect(mockSelectLanguage).toHaveBeenCalled();
  })

})
