import { add } from '../src/index';

describe('src/index', () => {
  it('add should work', () => {
    expect(add(1, 2)).toBe(3);
  });
});