const test = require('ava');
const {Employee} = require('../src/employee');

test('should return employee when new employee given name and type', t => {
  let employee = new Employee('lisi','engineer');
  t.is(employee._name,'lisi');
  t.is(employee._type,'engineer');
});
