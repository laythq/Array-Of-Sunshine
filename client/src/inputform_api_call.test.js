import mockAxios from 'jest-mock-axios';
import React from 'react'
import { InputForm } from './inputform'
import { shallow, mount } from 'enzyme'

// note am still working on this test!!

xdescribe('getMethods function in the Input Form component', () => {

  afterEach(() => {
      // cleaning up the mess left behind the previous test
      mockAxios.reset();
  });

  it('Input Form should get data from the server', () => {

    const wrapper = shallow(<InputForm />).instance()

    let catchFn = jest.fn(),
        thenFn = jest.fn();

    let clientMessage = 'string from client';

    wrapper.getMethods(clientMessage)
      .then(thenFn)
      .catch(catchFn);

    expect(mockAxios.post).toHaveBeenCalledWith('/api/scripts', { data: clientMessage })

    let responseObj = { data: 'string from server' };
    mockAxios.mockResponse(responseObj);

    expect(thenFn).toHaveBeenCalledWith('string from server');
    expect(catchFn).not.toHaveBeenCalled();

  })

})
