function printOwing (invoice) {
  outstanding = calcOutstanding(invoice.borderSpacing);
  return printTxt({outstanding,invoice});
}
function printTxt(data){
let result = '***********************\n'+
  '**** Customer Owes ****\n'+
  '***********************\n';
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // record due date
  const today = new Date();
  data.invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(`name: ${data.invoice.customer}`);
  console.log(`amount: ${data.outstanding}`);
  console.log(`amount: ${data.invoice.dueDate.toLocaleDateString()}`);
  result += `name: ${data.invoice.customer}\n`;
  result += `amount: ${data.outstanding}\n`;
  result += `amount: ${data.invoice.dueDate.toLocaleDateString()}\n`;
  return result;
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
