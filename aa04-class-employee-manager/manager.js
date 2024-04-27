const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }

    calculateBonus(multiplier) {
        const salaryTotal = this._totalSubSalary()
        const bonus = (this.salary + salaryTotal) * multiplier
        return bonus
    }

    _totalSubSalary() {
        let sum = 0

        this.employees.forEach(emp => {

            if (emp instanceof Manager) {
                sum += emp.salary + emp._totalSubSalary()
            } else {
                sum += emp.salary
            }

        })

        return sum
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000



module.exports = Manager