// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class manager extends Employee {
   constructor(name, id, email,office) {
      super(name, id, email,office);
      this.office =office;
   }

   getSchool() {
      return this.office;
   }

   getRole() {
      return "Intern";
   }}