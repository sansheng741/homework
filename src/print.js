function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n'+
  '**** Customer Owes ****\n'+
  '***********************\n';
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  outstanding = calcOutstanding(invoice.borderSpacing);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
  result += `name: ${invoice.customer}\n`;
  result += `amount: ${outstanding}\n`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}\n`;
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
