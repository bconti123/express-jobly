const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", () => {
  test("Try to update one", () => {
    const result = sqlForPartialUpdate(
      { firstName: "Alex" },
      { firstName: "Bryan", ffirstName: "Nick" }
    );
    expect(result).toEqual({
      setCols: '"Bryan"=$1',
      values: ["Alex"],
    });
  });
  test("Try to update two items", () => {
    const result = sqlForPartialUpdate(
      { firstName: "Nia", First_name: "Ana" },
      { First_name: "Anna" }
    );
    expect(result).toEqual({
      setCols: '"firstName"=$1, "Anna"=$2',
      values: ["Nia", "Ana"],
    });
  });
});
