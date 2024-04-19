import fetchData from "../http";
import { getLevel } from "../mocking";

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should return level info when status is "ok"', () => {
    const mockResponse = {
        status: 'ok',
        level: 1
    };
    fetchData.mockReturnValue(mockResponse);

    const result = getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
    expect(result).toBe("Ваш текущий уровень: 1")
});

test('should return "temporary unavailable" meage when status is not "ok"', () => {
    const mockResponse = {
        status: 'error',
    };
    fetchData.mockReturnValue(mockResponse);

    const result = getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
    expect(result).toBe("Информация об уровне временно недоступна")
});