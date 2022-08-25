console.log("-----1. Employee Class-----");

class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxId = taxId;
    this.salary = salary;
  }
  generatePaySlip() {
    console.log(`Employee ID: ${this.id}`);
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Tax ID: ${this.taxId}`);
    console.log(`Pay: ${(this.salary / 12).toFixed(2)}`);
  }
  /**
   *        Employee ID: id
   Name: firstName lastName
   Tax ID: taxId
   Pay: monthlySalary --> will need to be calculated based off of salary
   */
}
const emp1 = new Employee(8375309, "Daniel", "Reiller", 1234565, 50000);

emp1.generatePaySlip();

console.log("-----2. Manager Class-----");

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(newEmployee) {
    this.managedEmployees.push(newEmployee);
    // console.log(this.managedEmployees);
  }
  removeManagedEmployee(employee) {
    const idx = this.managedEmployees.findIndex(
      (item) => employee.id === item.id
    );
    this.managedEmployees.splice(idx, 1);
    // console.log(this.managedEmployees);
    // console.log(idx);

    // this.managedEmployees = this.managedEmployees.filter(
    //   (item) => item.id !== employee.id
    // );
    // console.log(this.managedEmployees);
  }
}
const manager1 = new Manager(123, "Bob", "Barker", 4564564, 78000);

manager1.addManagedEmployee(emp1);
console.log(manager1);
console.log("------------");
manager1.removeManagedEmployee(emp1);
console.log(manager1);
