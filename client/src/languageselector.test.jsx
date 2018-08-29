import React from 'react';
import { shallow } from 'enzyme';
import { LanguageSelector } from './languageselector';

describe('language selector component', () => {
  let mockSelectLanguage;
  let wrapper;
  beforeEach(() => {
    mockSelectLanguage = jest.fn();
    wrapper = shallow(<LanguageSelector selectLanguage={mockSelectLanguage} />);
  });

  it('selects a language when button 1 is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSelectLanguage).toHaveBeenCalled();
  });

  it('selects a language when button 2 is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockSelectLanguage).toHaveBeenCalled();
  });

  it('selects a language when button 3 is clicked', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(mockSelectLanguage).toHaveBeenCalled();
  });
});
