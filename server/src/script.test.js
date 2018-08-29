/* eslint-disable */
import { findMethod } from './script';

describe('findMethod', () => {
  it('returns .join when required for desiredOutput', () => {
    expect(findMethod([1, 2, 3], '1,2,3')).toContain('.join');
  });

  it("returns 'no method found' if it is unable to find a method", () => {
    expect(findMethod([1, 2, 3], [2342, 534534, 65464654])).toContain('No method found');
  });

  it('returns .pop when appropriate', () => {
    expect(findMethod([1, 2, 3], 3)).toContain('.pop');
  });

  it('returns .reverse when appropriate', () => {
    expect(findMethod([1, 2, 3], [3, 2, 1])).toContain('.reverse');
  });

  it('returns .shift when appropriate', () => {
    expect(findMethod([1, 2, 3], 1)).toContain('.shift');
  });

  it('returns .slice when appropriate', () => {
    expect(findMethod([1, 2, 3], [1, 2, 3])).toContain('.slice');
  });

  it('returns .toString when appropriate', () => {
    expect(findMethod([1, 2, 3], '1,2,3')).toContain('.toString');
  });

  describe ('with nested arrays', () => {
    it('returns .pop for a nested array', () => {
      expect(findMethod([1,2,[1,2,3]], [1,2,3])).toContain('.pop')
    })
  });

  describe('multiple methods', () => {
    it('returns .reverse.join when appropriate', () => {
      expect(findMethod([1,2,3],'3,2,1')).toContain('.reverse.join')
    });

    it('returns .reverse.pop when appropriate', () => {
      expect(findMethod([1,2,3], 1)).toContain('.reverse.pop')
    });

    it('does not return .slice.toString when incorrect', () => {
      expect(findMethod([1,2,3], '1')).not.toContain('.slice.toString')
    })
  })
});
