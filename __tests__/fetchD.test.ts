import fetchD from "../app/fetchD";

test("fetches data succesfully", async () => {
    const data = await fetchD();
    expect(data).toBe("Data loaded");
});