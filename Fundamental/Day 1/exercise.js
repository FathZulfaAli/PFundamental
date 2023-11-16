/**
 * Write a code to find area of rectangle
 * Data: length = 5, width = 3
 * Expected return: 15
 *
 * @format
 */

let aLength = 5,
  aWidth = 3;
let areaofRectangle = aLength * aWidth;
console.log(
  `1. Luas persegi panjang dari ${aLength} dikali ${aWidth} sama dengan ${areaofRectangle}`
);

/*Write a code to find perimeter of rectangle
Data: length = 5, width = 3
Expected return: 16
 */

let perimofRectangle = (aLength + aWidth) * 2;
console.log(
  `2. Diagonal persegi panjang dari ${aLength} ditambah ${aWidth} dikali 2 sama dengan ${perimofRectangle}`
);

/*Write a code to find diameter, cicrumference and area of a circle
Data: radius = 5
Expected return: diameter = 10,
circumference = 31.4159,
area = 78.539
 */

let radius = 5;
let pi = Math.PI;
let diameter = radius * 2;
let circumference = 2 * pi * radius;
let areaofCircle = pi * radius ** 2;
let rounding1 = areaofCircle.toString();

console.log(
  `3a. Diameter lingkaran adalah 2 dikali ${radius} sama dengan ${diameter}`
);
console.log(
  `3b. Keliling lingkaran adalah 2 dikali PI dikali ${radius} sama dengan ${circumference.toFixed(
    4
  )}`
);
console.log(
  `3c. Luas lingkaran adalah PI dikali ${radius} pangkat 2 sama dengan ${rounding1.slice(
    0,
    6
  )}`
);

/*Write a code to find angles of triangle if two angles are given.
Data: a = 80,
b = 65
Expected return: c = 35
 */

let angleA = 80,
  angleB = 65;
let totalAB = angleA + angleB;
let angleC = 180 - totalAB;

console.log(
  `4. Siku C segitiga adalah total ${angleA} ditambah ${angleB} sama dengan ${totalAB}, sehingga siku C adalah 180^ dikurangi ${totalAB} sama dengan ${angleC}`
);

/*Write a code to get diffetence between dates in days
Data: date1 = 2022-01-20,
date2 = 2022-01-22
Expected return: 2 days
 */

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let diffMs = date2.getTime() - date1.getTime();
let diffDay = diffMs / (1000 * 3600 * 24);

console.log(
  `5. Selisih antara tanggal ${date1} dan ${date2} adalah ${diffDay} hari`
);

/*Write a code to convert days to year, months and days 
1. 400 Days
2. 366 Days
Expected return: 1. 1 Year, 1 Month, 5 Days
2. 1 Year, 0 month, 1 Day
 */

let days = 400;
let days2 = 366;
let daysInYear = 365;
let daysInMonth = 30;

//case1
//count in year & return remaining day
let year = Math.floor(days / daysInYear);
let remainAfterDevideByYear = days % daysInYear;
//count in month & return remaining day
let month = Math.floor(remainAfterDevideByYear / daysInMonth);
let remainDays = remainAfterDevideByYear % daysInMonth;
console.log(
  `6.a Mengubah 400 hari menjadi ${year} Tahun, ${month} Bulan, ${remainDays} Hari`
);

//case2
//count in year & return remaining day
let year2 = Math.floor(days2 / daysInYear);
let remainAfterDevideByYear2 = days2 % daysInYear;
//count in month & return remaining day
let month2 = Math.floor(remainAfterDevideByYear2 / daysInMonth);
let remainDays2 = remainAfterDevideByYear2 % daysInMonth;
console.log(
  `6.b Mengubah 366 hari menjadi ${year2} Tahun, ${month2} Bulan, ${remainDays2} Hari`
);
