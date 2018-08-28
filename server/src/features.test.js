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
  });
  // Adding elements to an array
  it('can add multiple elements at once', () => {
    expect(findMethod([1,2,3],[1,2,3,4,5,6])).toContain('concat([4,5,6])')
  });
  // Rearranging?

  // Sum an array
  it('can sum an array', () => {
    expect(findMethod([10,20,30,40],100)).toContain('reduce((a, b) => a + b)')
  });
  // As a string
  it('can convert an array to a string', () => {
    expect(findMethod([10,20,30,40], '10,20,30,40')).toContain('toString()')
  });
  // Merge string array to string with spaces
  it('can recognise an array of words', () => {
    expect(findMethod(['hack', 'the', 'planet!'], 'hack the planet!')).toContain("join(' ')")
  });
  // Transpose

  // Sort
  it('can sort an array', () => {
    expect(findMethod([5,4,8,2],[2,4,5,8])).toContain('sort()')
  });
  // Reverse
  it('returns .reverse when appropriate', () => {
    expect(findMethod([1, 2, 3,4], [4, 3, 2, 1])).toContain('reverse()');
  });

  // Remove null values in an array
  it('returns filter for null values', () => {
    expect(findMethod(['a',null,,4,null,true],['a',4,true])).toContain('filter(e => e === 0 || e)')
  })
  // map lol
})