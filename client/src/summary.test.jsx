import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from './summary';

describe('Summary component rendering', () => {
  let wrapper;
  let inst;
  beforeEach(() => {
    wrapper = shallow(<Summary />);
    inst = wrapper.instance();
  });

  describe('Rendering', () => {
    it('renders the Input Form', () => {
      expect(wrapper.find('InputForm').exists()).toBeTruthy();
    });
    it('renders the Code Suggestion', () => {
      expect(wrapper.find('CodeSuggestion').exists()).toBeTruthy();
    });
    it('renders the History', () => {
      expect(wrapper.find('History').exists()).toBeTruthy();
    });
  });

  describe('Functions', () => {
    describe('setInputOutput', () => {
      it('changes the input and output states', () => {
        inst.setInputOutput('input', 'output');
        expect(inst.state.input).toEqual('input');
      });
    });
    describe('setLanguage', () => {
      it('changes the language state', () => {
        inst.setLanguage('language');
        expect(inst.state.language).toEqual('language');
      });
    });
    describe('setSuggestion', () => {
      it('updates the language state', () => {
        inst.setSuggestion('suggestion');
        expect(inst.state.suggestion).toEqual('suggestion');
      });
    });
    describe('log suggestion', () => {
      it('logs a suggestion in the state', () => {
        inst.logSuggestion('language', 'input', 'output', 'code');
        expect(inst.state.history).toContain('language: input > output = code');
      });
    });
  });
});
