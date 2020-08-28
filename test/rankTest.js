const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('should return 1 when voyageRisk given voyage.zone null and voyage.length 4', t => {
  const voyage = {
    zone: '',
    length: 4,
  };
  const result = voyageRisk(voyage);
  t.is(result,1);
});

rankTest('should return 3 when voyageRisk given voyage.zone null and voyage.length 5', t => {
  const voyage = {
    zone: '',
    length: 5,
  };
  const result = voyageRisk(voyage);
  t.is(result,3);
});

rankTest('should return 4 when voyageRisk given voyage.zone null and voyage.length 9', t => {
  const voyage = {
    zone: '',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result,4);
});

rankTest('should return 8 when voyageRisk given voyage.zone china and voyage.length 9', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const result = voyageRisk(voyage);
  t.is(result,8);
});

