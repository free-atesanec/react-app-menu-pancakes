import PancakeFlipService from './PancakeFlipService';

test('Single valid case', () => {
    const service = new PancakeFlipService();
    expect(service.processPancakeInput("3 ---+-++-")).toEqual([3]);
});
test('Single impossible case', () => {
    const service = new PancakeFlipService();
    expect(service.processPancakeInput("3 ----+-++-")).toEqual(["IMPOSSIBLE"]);
});
test('Invalid syntax', () => {
    const service = new PancakeFlipService();
    expect(service.processPancakeInput("3 ----+-++-xxx")).toBeInstanceOf(Error);
});
