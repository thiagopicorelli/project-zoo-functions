const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.find((emp) => emp.managers.includes(id)) !== undefined;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees = data.employees.filter((employ) => employ.managers.includes(managerId));
  return managedEmployees.map((employ) => `${employ.firstName} ${employ.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
