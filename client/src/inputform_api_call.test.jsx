import mockAxios from 'jest-mock-axios';
import React from 'react';
import { shallow } from 'enzyme';
import { InputForm } from './inputform';

// note am still working on this test!!

xdescribe('getMethods function in the Input Form component', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it('Input Form should get data from the server', () => {
    const wrapper = shallow(<InputForm />).instance();

    const catchFn = jest.fn();


    const thenFn = jest.fn();

    const clientMessage = 'string from client';

    wrapper.getMethods(clientMessage)
      .then(thenFn)
      .catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith('/api/scripts', { data: clientMessage });

    const responseObj = { data: 'string from server' };
    mockAxios.mockResponse(responseObj);

    expect(thenFn).toHaveBeenCalledWith('string from server');
    expect(catchFn).not.toHaveBeenCalled();
  });
});
