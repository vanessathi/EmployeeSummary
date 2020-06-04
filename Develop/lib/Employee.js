// TODO: Write code to define and export the Employee class

// parent class Employee
// needs name, id, email, getName(), getId(), getEmail, getRole() 
//getRole() will return Employee

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return 'Employee';
    };

};

module.exports = Employee;