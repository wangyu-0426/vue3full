import { sum } from "../../src/utils/sum"
test('测试sum：1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});