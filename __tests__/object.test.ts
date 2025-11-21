import getObject from "@/app/object";

test("Get object value", () => {
    expect(getObject()).toEqual({ name: "Dieguin" });
});