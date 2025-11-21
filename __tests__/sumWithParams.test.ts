import add from "../app/sumWithParams";

test("Sum with Params test", () => {
    expect(add(2, 3)).not.toBe(3);
});