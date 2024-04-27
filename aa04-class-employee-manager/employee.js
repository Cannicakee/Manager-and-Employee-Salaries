class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager ?? null;

        // If we have passed in a mgr, then add
        // employee to that manager upon creation
        if (this.manager) {
            manager.addEmployee(this)
        }
    }


}

// const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
// console.log(leo)

module.exports = Employee;