import React from 'react';
import { shallow } from 'enzyme';
import { CodeSuggestion } from './suggestion';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme'
configure({ adapter: new Adapter() });

describe('suggestion component', () => {
  // it('returns a new suggestion when the user inputs', () => {
  //   const wrapper = shallow(
  //     <CodeSuggestion
  //       input="input"
  //       output="output"
  //       language="language"
  //       suggestion="suggestion"
  //     />,
  //   );
  //   expect(wrapper.find('div').text()).toEqual('language: input > output = suggestion');
  // });
  it('returns nothing without user input', () => {
    const wrapper = shallow(
      <CodeSuggestion input={null} />,
    );
    expect(wrapper.type()).toEqual(null);
  });
});
