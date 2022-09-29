const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeeFilter = (employee) => employee.firstName === employeeName
                                    || employee.lastName === employeeName;
  const employeeObjs = data.employees.filter(employeeFilter);

  switch (employeeObjs.length) {
  case 0:
    return {};
  case 1:
    return employeeObjs[0];
  default:
    return employeeObjs;
  }
}

module.exports = getEmployeeByName;
