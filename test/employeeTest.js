const test = require('ava');
const {Employee} = require('../src/employee');

test('should return employee when new employee given name and type', t => {
  let employee = new Employee('lisi','engineer');
  t.is(employee._name,'lisi');
  t.is(employee._type,'engineer');
});


test('should throw exception when new employee given name and error type', t => {
  try{
    let employee = new Employee('lisi','x');
  }catch(e){
    t.is(e.message,'Employee cannot be of type x');
  }
});

test('should return correct string when employee.toString given employee', t => {
  let employee = new Employee('lisi','engineer');
  t.is(employee.toString(), 'lisi (engineer)');
});