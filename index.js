let employee = {
    name : 'Mashaa',
    streetAddress : 'Ruiru',
}

updateEmployeeWithKeyAndValue = ( employee, name, streetAddress) => {
 return {
    ...employee,
     [name]: streetAddress,
   };
 }
  
 destructivelyUpdateEmployeeWithKeyAndValue = ( employee, key, value) => {
employee[key] = value 
return employee
 }
const newEmployee = {name: 'Sam', streetAddress: '12 Broadway'}


 deleteFromEmployeeByKey = (employee, key, object) => {

    const newEmployee = {
      ...employee,
      [key]: object,
    
    };
    delete newEmployee[key];
  return newEmployee;
  }
  destructivelyDeleteFromEmployeeByKey = (employee, key ) => {
    delete employee[key];
    return employee;
  }