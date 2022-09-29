const data = require('../data/zoo_data');

function isManager(id) {
  const managers = [
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83',
  ];

  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managedEmployees = data.employees.filter((employ) => employ.managers.includes(managerId));

  const employeeNames = managedEmployees.reduce((employeeList, employee) => {
    employeeList.push(`${employee.firstName} ${employee.lastName}`);
    return employeeList;
  }, []);

  return employeeNames;
}

module.exports = { isManager, getRelatedEmployees };
