import API from "../app/api";

jest.mock("../app/api");

test("mocked fetchDataFromAPI returns (sch)meckled data", () => {
    API.mockReturnValue("Mocked data");
    const data = API();
    expect(data).toBe("Mocked data");
});