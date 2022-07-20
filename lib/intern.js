const Employee = require("./employee");

class intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  };

  getSchool() => {
    return this.school;
  };

};