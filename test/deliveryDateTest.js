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

test('should return 4 when deliveryDate given Rush is true and deliveryState is NX', t => {
  let anOrder = {deliveryState : 'NX', placedOn : {plusDays : (x) => {return x}}}
  let isRush = true;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});


test('should return 4 when deliveryDate given Rush is false and deliveryState is MA', t => {
  let anOrder = {deliveryState : 'MA', placedOn : {plusDays : (x) => {return x}}}
  let isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 4);
});

test('should return 5 when deliveryDate given Rush is false and deliveryState is ME', t => {
  let anOrder = {deliveryState : 'ME', placedOn : {plusDays : (x) => {return x}}}
  let isRush = false;
  const result = deliveryDate(anOrder, isRush);
  t.is(result, 5);
});
