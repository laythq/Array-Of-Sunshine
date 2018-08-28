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
  it('can add multiple elements at once', () => {
    expect(findMethod([1,2,3],[1,2,3,4,5,6])).toContain('concat(4,5,6)')
  });
  // Rearranging?

  // Sum an array
  it.only('can sum an array', () => {
    expect(findMethod([10,20,30,40],100)).toContain('reduce((a, b) => a + b)')
  });
  // As a string

  // Merge string array to string with spaces

  // Transpose

  // Sort

  // Reverse
  it('returns .reverse when appropriate', () => {
    expect(findMethod([1, 2, 3,4], [4, 3, 2, 1])).toContain('reverse');
  });

  // Remove null values in an array

  // map lol
})