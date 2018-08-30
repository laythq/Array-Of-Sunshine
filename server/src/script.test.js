/* eslint-disable */
import { findMethod } from './script';

describe('findMethod', () => {
  describe('for zero-argument methods', () => {
    it('returns .join() when required for desiredOutput', () => {
      expect(findMethod([1, 2, 3], '1,2,3')).toContain('.join()');
    });

    //need to solve garbage crisis
    it("returns 'no method found' if it is unable to find a method", () => {
      expect(findMethod([1, 2, 3], [2342, 534534, 65464654])).toContain('No method found');
    });

    it('returns .pop when appropriate', () => {
      expect(findMethod([1, 2, 3], 3)).toContain('.pop()');
    });

    it('returns .reverse when appropriate', () => {
      expect(findMethod([1, 2, 3], [3, 2, 1])).toContain('.reverse()');
    });

    it('returns .shift when appropriate', () => {
      expect(findMethod([1, 2, 3], 1)).toContain('.shift()');
    });

    it('returns .toString when appropriate', () => {
      expect(findMethod([1, 2, 3], '1,2,3')).toContain('.toString()');
    });

    describe ('with nested arrays', () => {
      it('returns .pop for a nested array', () => {
        expect(findMethod([1,2,[1,2,3]], [1,2,3])).toContain('.pop()')
      })
    });

    describe('multiple methods', () => {
      it('returns .reverse.join when appropriate', () => {
        expect(findMethod([1,2,3],'3,2,1')).toContain('.reverse().join()')
      });

      it('returns .reverse.pop when appropriate', () => {
        expect(findMethod([1,2,3], [3,2])).toContain('.reverse().pop()')
      });

      it('does not return .slice.toString when incorrect', () => {
        expect(findMethod([1,2,3], '1')).not.toContain('.slice.toString')
      })
    })
  });

  describe('for one-argument methods', () => {
    it('returns push when appropriate', () => {
      expect(findMethod([1,2,3], [1,2,3,4])).toContain('.push(4)')
    });

    xit('returns concat when appropriate', () => {
      expect(findMethod([1,2,3],[1,2,3,4,5])).toContain('.concat([4,5])')
    });

    it('returns fill when appropriate', () => {
      expect(findMethod([1,2,3], [4,4,4])).toContain('.fill(4)')
    });

    it('returns indexOf when appropriate', () => {
      expect(findMethod(['a','b','c'], 2)).toContain(".indexOf(\"c\")")
    });

    it('returns indexOf when appropriate', () => {
      expect(findMethod([1,45,60], 1)).toContain(".indexOf(45)")
    });

    it('returns slice when appropriate', () => {
      expect(findMethod([11,12,13,14,15], [13,14,15])).toContain(".slice(2)")
    });

    it('returns unshift when appropriate', () => {
      expect(findMethod([1,2,3,4],[true,1,2,3,4])).toContaincd ('.unshift(true)');
    })
  })
});
