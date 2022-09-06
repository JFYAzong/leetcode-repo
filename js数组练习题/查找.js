//查找数组对象中age大于18的对象
const filterAdult = ([
    { age: 19, name: 'Jack' },
    { age: 5, name: 'Apple' },
    { age: 12, name: 'Lynn' },
    { age: 25, name: 'David' }
]);
const result = filterAdult.filter(filterAdult => filterAdult.age > 18);
console.log(result);