function printOwing (invoice) {
  let outstanding = calcOutstanding(invoice.borderSpacing);
  calcDate(invoice);
  return printTxt({outstanding,invoice});
}
function printTxt(data){
let result = '***********************\n'+
  '**** Customer Owes ****\n'+
  '***********************\n';
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  console.log(`name: ${data.invoice.customer}`);
  console.log(`amount: ${data.outstanding}`);
  console.log(`amount: ${data.invoice.dueDate.toLocaleDateString()}`);
  result += `name: ${data.invoice.customer}\n`;
  result += `amount: ${data.outstanding}\n`;
  result += `amount: ${data.invoice.dueDate.toLocaleDateString()}\n`;
  return result;
}

function calcDate(invoice){
   const today = new Date();
   invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calcOutstanding(borderSpacing){
  let outstanding = 0;
  for (const o of borderSpacing) {
      outstanding += o.amount;
    }
  return outstanding;
}

module.exports = {
  printOwing,
}
