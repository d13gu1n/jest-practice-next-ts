import extCallback from "@/app/callback";

test("Callback test", (done) => {
    function callback(data: string) {
        try {
            expect(data).toBe("Hey!! Listen!!");
            done()
        } catch (err) {
            done(err);
        }
    }
    extCallback(callback);
})