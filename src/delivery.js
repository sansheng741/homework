function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = calcRushDeliveryTime(anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = calcDeliveryTime(anOrder);
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

const deliveryTimeHandlers = [
  function(anOrder){
    return  ['MA','CT','NY',].includes(anOrder.deliveryState) ? 2 : 0;
  },
  function(anOrder){
    return ['ME','NH',].includes(anOrder.deliveryState) ? 3 : 0;
  }
]
function calcDeliveryTime(anOrder){
  let deliveryTime = 0;
  for(deliveryTimeHandler of deliveryTimeHandlers){
      let deliveryTime = deliveryTimeHandler(anOrder);
      if(deliveryTime != 0){
        return deliveryTime;
      }
    }
  return deliveryTime = 4;
}
module.exports = {
  deliveryDate,
};
