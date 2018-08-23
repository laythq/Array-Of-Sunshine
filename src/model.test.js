import {
  findMethod, workOutType, workOutArray, processInput,
} from './model';

describe('processInput', () => {
  test('it correctly processes a quoted array', () => {
    expect(JSON.stringify(processInput('"["a", 2, true, null, [5]]"'))).toBe(JSON.stringify(['a', 2, true, null, [5]]));
  });
});

describe('workOutType', () => {
  test('it turns a single quoted string into a string', () => {
    expect(workOutType("'This is a string'")).toBe('This is a string');
  });

  test('it turns a double quoted string into a string', () => {
    expect(workOutType('"This is a string"')).toBe('This is a string');
  });

  test('it turns an integer string into an integer', () => {
    expect(workOutType('2')).toBe(2);
  });

  test('it turns a null string into null', () => {
    expect(workOutType('null')).toBe(null);
  });

  test('it turns a true string into boolean true value', () => {
    expect(workOutType('true')).toBe(true);
  });

  test('it turns a false string into boolean false value', () => {
    expect(workOutType('false')).toBe(false);
  });

  test('it fully parses a double quoted array string of mixed elements', () => {
    expect(JSON.stringify(workOutType('["a",2,"c"]'))).toBe(JSON.stringify(['a', 2, 'c']));
  });

  test('it fully parses a double quoted array string of strings', () => {
    expect(JSON.stringify(workOutType('["a","b","c"]'))).toBe(JSON.stringify(['a', 'b', 'c']));
  });

  test('it fully parses a double quoted array string of integers', () => {
    expect(JSON.stringify(workOutType('[1,2,3]'))).toBe(JSON.stringify([1, 2, 3]));
  });
});

describe('workOutArray', () => {
  test('it fully parses an array string of integers', () => {
    expect(JSON.stringify(workOutArray('[1,2,3]'))).toBe(JSON.stringify([1, 2, 3]));
  });
});


describe('findMethod', () => {
  test('it returns .join when required for desiredOutput', () => {
    expect(findMethod([1, 2, 3], '1,2,3')).toContain('.join');
  });

  test("it returns 'no method found' if it is unable to find a method", () => {
    expect(findMethod([1, 2, 3], [2342, 534534, 65464654])).toContain('No method found');
  });

  test('it returns .pop when appropriate', () => {
    expect(findMethod([1, 2, 3], 3)).toContain('.pop');
  });

  test('it returns .reverse when appropriate', () => {
    expect(findMethod([1, 2, 3], [3, 2, 1])).toContain('.reverse');
  });

  test('it returns .shift when appropriate', () => {
    expect(findMethod([1, 2, 3], 1)).toContain('.shift');
  });

  test('it returns .slice when appropriate', () => {
    expect(findMethod([1, 2, 3], [1, 2, 3])).toContain('.slice');
  });

  test('it returns .toString when appropriate', () => {
    expect(findMethod([1, 2, 3], '1,2,3')).toContain('.toString');
  });
});
