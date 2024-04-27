class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager ?? null;
    }
}

const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)

module.exports = Employee;