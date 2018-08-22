import { findMethod } from './model'

test('it returns .join when required for desiredOutput', () => {
  expect(findMethod([1,2,3], "1,2,3" )).toBe(".join");
});
