const test = require('ava');
const {deliveryDate} = require('../src/delivery');

test('should return 2 when deliveryDate given Rush is true and deliveryState is MA', t => {
  let anOrder = {deliveryState : 'MA', placedOn : {plusDays : (x) => {return x}}}
  let isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 2);
});

test('should return 3 when deliveryDate given Rush is true and deliveryState is NY', t => {
  let anOrder = {deliveryState : 'NY', placedOn : {plusDays : (x) => {return x}}}
  let isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 3);
});



