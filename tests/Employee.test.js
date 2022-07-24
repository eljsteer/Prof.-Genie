const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("dataTypes", () => {
    it("when creating a new constructor it should return an instance as an object", () => {

      const employObj = new Employee("SofiaVergara", 17, "sofiav@gloriaDelgado.com");

      expect(typeof(employObj)).toBe("object");
    });
    it("should return an object with properties \"Name\" & \"Email\" as strings", () => {
      const name = "Ed_Oneill";
      const email = "edOneill@jaypritchett.com";

      const employObj = new Employee(name, 1, email);

      expect(typeof(employObj.name))&&expect(typeof(employObj.email)).toBe("string");
    });
    it("should return an object with properties \"id\" as a number", () => {
      const id = 8

      const employObj = new Employee("mannyDelgado", id, "manny@ricorodriguez.com");

      expect(typeof(employObj.id)).toBe("number");
    });
  });
  describe("ConstructorNameTest", () => {
    it("should set the name property from user input using the constructor",() => {
      const userInput = "PhilDunphy";
      const oldMate = new Employee(userInput, 1, "philDunphy@TyBurrell.com");

      expect(oldMate.name).toBe(userInput);
    });
  });
  describe("ConstructorIDTest", () => {
    it("should set the ID property from user input using the constructor",() => {
      const userInput = 22;
      const oldMate = new Employee("claireDunphy", userInput, "claireDunphy@JulieBowen.com");

      expect(oldMate.id).toBe(userInput);
    });
  });
  describe("ConstructorEmailTest", () => {
    it("should set the Email property from user input using the constructor",() => {
      const userInput = "lukeDunphy@nolanGould.com";
      const oldMate = new Employee("lukeDunphy", 34, userInput);

      expect(oldMate.email).toBe(userInput);
    });
  });
  describe("getNameTest", () => {
    it("should return name value from using the getName()",() => {
      const oldMateName = "haleyDunphy";
      const oldMate = new Employee(oldMateName, 59, "haleyDunphy@sarahHyland.com");

      expect(oldMate.getName()).toBe(oldMateName);
    })
  })
  describe("getIDTest", () => {
    it("should return id value from using the getID()",() => {
      const oldMateID = "44";
      const oldMate = new Employee("alexDunphy", oldMateID, "alexDunphy@arielWinter.com");

      expect(oldMate.getID()).toBe(oldMateID);
    })
  })
  describe("getEmailTest", () => {
    it("should return id value from using the getEmail()",() => {
      const oldMateEmail = "cameronTucker@ericStoneStreet";
      const oldMate = new Employee("cameronTucker", 8, oldMateEmail);

      expect(oldMate.getEmail()).toBe(oldMateEmail);
    })
  })
  describe("returnRoleTest", () => {
    it("should return Role \"Employee\" when using the getRole()",() => {
      const roleTest = "Employee";
      const oldMate = new Employee("mitchellPritchard", 3, "mitchellPritchard@jesseFerguson.com");

      expect(oldMate.getRole()).toBe(roleTest);
    });
  });
});
