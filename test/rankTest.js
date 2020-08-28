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
