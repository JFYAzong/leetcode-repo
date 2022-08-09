const isAllNumPosive = ([1, 2, 3, 4, 'a', {a:3}]);
const isBelowThreshold = (currentValue) => currentValue > 0;
console.log(isAllNumPosive.every(isBelowThreshold));
