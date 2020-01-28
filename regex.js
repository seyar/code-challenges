console.time('st');
// * - is catastrofic backtracking
const regex = /^\w+([\.-]?\w+)*_day$/;
const regex1 = /(.+)_day$/;
const str = 'poi_alerts_road_works_future_24_day1';
let m;

Array(2).fill(1).forEach(() => {
    regex.test(str);
})

console.timeEnd('st');
