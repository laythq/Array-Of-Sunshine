/* eslint-disable */
import { findMethod } from './script';

describe('Features', () => {
  // Reducing and rearranging
  // it('can return slice(x).unshift(y)', () => {
  //
  // })

  // Access elements in an array.
  it('can access elements in an array', () => {
    expect(findMethod([1,2,3,4], 3 )).toContain('input[2]')
  });
  //Access elements in a nested array.
  it('can access elements in a nested array', () => {
    expect(findMethod([['a','b'],['c','d'],['e','f']], 'e')).toContain('input[2][0]')
  })
  // Adding elements to an array

  // Rearranging?

  // Sum an array

  // As a string

  // Merge string array to string with spaces

  // Transpose

  // Sort

  // Reverse

  // Remove null values in an array

  // map lol
})