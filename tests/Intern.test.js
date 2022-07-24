const Intern = require("../lib/Intern")

describe("Intern",()=> {
  describe("Constructor", () => {
    it("should set the School property from user input using the constructor",() => {
      const testVal = "HardKnocks";
      const inTurn = new Intern("Ragnar", 1, "Ragnar@DonPatron.com", testVal);

      expect(inTurn.school).toBe(testVal);
    });
  })
  describe("returnSchool", () => {
    it("should return school value using the getSchool()",() => {
      const school = "HardKnocks";
      const inTurn = new Intern("Bjorn", 2, "Bjorn@thebest.com", school);

      expect(inTurn.getSchool()).toBe(school);
    })
  })
  describe("returnRole", () => {
    it("should return Role \"Intern\" when using the getRole()",() => {
      const roleTest = "Intern";
      const inTurn = new Intern("Lagertha", 3, "lagertha@sogoo.com", roleTest);

      expect(inTurn.getRole()).toBe(roleTest);
    });
  });
});