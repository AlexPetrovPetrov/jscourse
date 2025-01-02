// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.log(
  `...${testData1[0]}celsius ... ${testData1[1]} celsius ... ${testData1[2]} celsius ...`
);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}celsius in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(testData1);
