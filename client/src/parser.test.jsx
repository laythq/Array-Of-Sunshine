import { parseArray, parseString, processInput } from './parser';

describe('processInput', () => {
  it('correctly processes a quoted array', () => {
    expect(JSON.stringify(processInput('"["a", 2, true, null, [5]]"'))).toBe(JSON.stringify(['a', 2, true, null, [5]]));
  });
});

describe('parseString', () => {
  it('turns a single quoted string into a string', () => {
    expect(parseString("'This is a string'")).toBe('This is a string');
  });

  it('turns a double quoted string into a string', () => {
    expect(parseString('"This is a string"')).toBe('This is a string');
  });

  it('turns an integer string into an integer', () => {
    expect(parseString('2')).toBe(2);
  });

  it('turns a null string into null', () => {
    expect(parseString('null')).toBe(null);
  });

  it('turns a true string into boolean true value', () => {
    expect(parseString('true')).toBe(true);
  });

  it('turns a false string into boolean false value', () => {
    expect(parseString('false')).toBe(false);
  });

  it('fully parses a double quoted array string of mixed elements', () => {
    expect(JSON.stringify(parseString('["a",2,"c"]'))).toBe(JSON.stringify(['a', 2, 'c']));
  });

  it('fully parses a double quoted array string of strings', () => {
    expect(JSON.stringify(parseString('["a","b","c"]'))).toBe(JSON.stringify(['a', 'b', 'c']));
  });

  it('fully parses a double quoted array string of integers', () => {
    expect(JSON.stringify(parseString('[1,2,3]'))).toBe(JSON.stringify([1, 2, 3]));
  });

  it('parses a float string', () => {
    expect(parseString('2.4')).toBe(2.4);
  });
});

describe('parseArray', () => {
  it('fully parses an array string of integers', () => {
    expect(JSON.stringify(parseArray('[1,2,3]'))).toBe(JSON.stringify([1, 2, 3]));
  });

  it('parses a nested array string of integers', () => {
    expect(JSON.stringify(parseArray('[[1, 2], [2, 3], [4, 5]]'))).toBe(JSON.stringify([[1, 2], [2, 3], [4, 5]]));
  });

  it('parses a nested array string of strings', () => {
    expect(JSON.stringify(parseArray("[['a', 'a'], ['b', 'b'], ['c', 'c']]"))).toBe(JSON.stringify([['a', 'a'], ['b', 'b'], ['c', 'c']]));
  });

  it('parses a nested array string of mixed elements', () => {
    expect(JSON.stringify(parseArray("[['a', 2, true], [2.4, false], null]"))).toBe(JSON.stringify([['a', 2, true], [2.4, false], null]));
  });
});
