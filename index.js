// Write your solution in this file!
const employee = {
    name : "Carlos",
    streetAddress : "Isabela Street"
}

function updateEmployeeWithKeyAndValue() {
    return {
        ...employee,
        ["name"]: "Sam",
        streetAddress : "11 Broadway"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    
    employee.streetAddress = "12 Broadway";
    return employee

}

function deleteFromEmployeeByKey() {

    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee
}