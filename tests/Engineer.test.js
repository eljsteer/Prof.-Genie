const Engineer = require("../lib/Engineer")

describe("Engineer",()=> {
  describe("Constructor", () => {
    it("should set gitHub property from user input using the constructor",() => {
      const testVal = "testGitHub";
      const eng = new Engineer("Rollo", 2, "rollo@test.com", testVal);

      expect(eng.gitHub).toBe(testVal);
    });
  })
  describe("returnGitHub", () => {
    it("should return gitHub userName using the getGitHub()",() => {
      const gitTest = "testGitHub";
      const eng = new Engineer("JasontheBest", 2, "lol@thebest.com", gitTest);

      expect(eng.getGitHub()).toBe(gitTest);
    })
  })
  describe("returnRole", () => {
    it("should return the Role \"Engineer\" when using the getRole()",() => {
      const roleTest = "Engineer";
      const eng = new Engineer("Poppy", 2, "poppy@rolls.com", roleTest);

      expect(eng.getRole()).toBe(roleTest);
    });
  });
});