const days= 600;
const daysinyear =365;
const daysinmonth = 30;

const year = Math.floor(days/daysinyear);
const residualyear= days % daysinyear;
const month = Math.floor(residualyear/daysinmonth);
const residualMonth= residualyear % daysinmonth;
console.log(`${year} year, ${month} month ${residualMonth} days`);
