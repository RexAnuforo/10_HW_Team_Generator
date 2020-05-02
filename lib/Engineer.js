// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// If you inherit from a class, make sure you REQUIRE that class


// Basic class structure:

const Employee = require("./Employee");

class Engineer extends Employee {
   constructor(name, id, email,github) {
      super(name, id, email,github);
      this.github =github;
   }

   getSchool() {
      return this.github;
   }

   getRole() {
      return "Engineer";
   }}