function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = calcRushDeliveryTime(anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if ([
      'MA',
      'CT',
      'NY',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      'ME',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
const rushDeliveryTimeHandlers = [
  function(anOrder){
    return  ['MA','CT',].includes(anOrder.deliveryState) ? 1 : 0;
  },
  function(anOrder){
    return ['NY','NH',].includes(anOrder.deliveryState) ? 2 : 0;
  }
]
function calcRushDeliveryTime(anOrder){
  for(rushDeliveryTimeHandler of rushDeliveryTimeHandlers){
    let deliveryTime = rushDeliveryTimeHandler(anOrder);
    if(deliveryTime != 0){
      return deliveryTime;
    }
  }
  return deliveryTime = 3;
}
module.exports = {
  deliveryDate,
};
