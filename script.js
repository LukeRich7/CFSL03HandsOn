class Employee {
    constructor(name, salary, hireDate){
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(yrsInManagement, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.yrsInManagement = yrsInManagement;
    }
    getYrsInManagment() {
        console.log(this.yrsInManagement);
    }
    managerProfile() {
        console.log(this.name + " has " + this.yrsInManagement + " years of managerial experience and currently makes " + this.salary + " annually. " );
    }

}

class Designer extends Employee {
    constructor(designMethod, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.designMethod = designMethod;
    }
    getDesignMethod() {
        console.log(this.designMethod);
    }
    designerProfile() {
        console.log(this.name + " implements " + this.designMethod + " styling method, and was hired on" + this.hireDate + ".");
    }
}

class salesAssociate extends Employee {
    constructor(salesRevenue, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.salesRevenue = salesRevenue;
    }
    getSalesRevenue() {
        console.log(this.salesRevenue);
    }
    salesAssociateProfile() {
        console.log(this.name + " has an annual salary of " + this.salary + " and has an annual sales revenue of " + this.salesRevenue + ".");
    }
}


