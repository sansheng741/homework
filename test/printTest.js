const test = require('ava');
const {printOwing} = require('../src/print');


test('should return print result when printOwing given customer and borderSpacing', t => {
   const data = {
    customer : 'colin',
    borderSpacing : [
      {amount : 1}
    ]
   }
   t.is(printOwing(data) ,'***********************\n' +
                           '**** Customer Owes ****\n' +
                           '***********************\n' +
                           'name: colin\n'  +
                           'amount: 1\n' +
                           'amount: 9/27/2020\n');
})
