const Manager = require("../lib/Manager")

describe("Manager",()=> {
  describe("Constructor", () => {
    it("should set OfficeNumber property from user input using the constructor",() => {
      const testVal = 17;
      const mani = new Manager("Tommy", 1, "Tommy@test.com", testVal);

      expect(mani.officeNumber).toBe(testVal);
    });
  })
  describe("returnOfficeNum", () => {
    it("should return Office number using the getOfficeNumber()",() => {
      const officeTest = 39;
      const mani = new Manager("Arthur", 2, "Arthur@thebest.com", officeTest);

      expect(mani.getOfficeNumber()).toBe(officeTest);
    })
  })
  describe("returnRole", () => {
    it("should return Role \"Manager\" when using the getRole()",() => {
      const roleTest = "Manager";
      const mani = new Manager("John", 3, "john@boyo.com", roleTest);

      expect(mani.getRole()).toBe(roleTest);
    });
  });
});