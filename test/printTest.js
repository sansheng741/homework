const test = require('ava');
const {printOwing} = require('../src/print');


test('should return print result when printOwing given customer and borderSpacing', t => {
   const data = {
    customer : 'colin',
    borderSpacing : [
      {amount : 1}
    ]
   }
   const today = new Date();
   let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
   t.is(printOwing(data) ,'***********************\n' +
                           '**** Customer Owes ****\n' +
                           '***********************\n' +
                           'name: colin\n'  +
                           'amount: 1\n' +
                           `amount: ${date.toLocaleDateString()}\n`);
})
