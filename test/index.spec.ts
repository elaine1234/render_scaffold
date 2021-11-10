import interpolate from "../src";
import "mocha";

describe("load src", () => {
  it('should work', () => {
    expect(interpolate).not.toBe(undefined);
  })
});