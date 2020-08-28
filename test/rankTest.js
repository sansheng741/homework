const rankTest = require('ava');
const {voyageRisk, voyageProfitFactor, captainHistoryRisk, rating} = require('../src/rank');

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

rankTest('should return 7 when voyageProfitFactor give.zone china and voyage.length 19 and history.length 11', t => {
  const voyage = {
      zone: 'china',
      length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = voyageProfitFactor(voyage, history);
  t.is(result,7);
});

rankTest('should return 3 when voyageProfitFactor give.zone east-indies and voyage.length 15 and history.length 9', t => {
  const voyage = {
      zone: 'east-indies',
      length: 15,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    }
  ];
  const result = voyageProfitFactor(voyage, history);
  t.is(result,3);
});

rankTest('should return 4 when captainHistoryRisk give.zone china and history.length 4', t => {
  const voyage = {
      zone: 'china',
      length: 15,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: -15,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'west-africa',
      profit: 7,
    }
  ];
  const result = captainHistoryRisk(voyage, history);
  t.is(result,4);
});

rankTest('should return A when rating give.zone china and voyage.length 18 and history.length 11', t => {
  const voyage = {
        zone: 'china',
        length: 18,
    };
    const history = [
      {
        zone: 'east-indies',
        profit: 5,
      },{
        zone: 'west-indies',
        profit: 15,
      },{
        zone: 'china',
        profit: -2,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },{
        zone: 'west-africa',
        profit: 7,
      },
    ];
  const result = rating(voyage, history);
  t.is(result,'A');
});