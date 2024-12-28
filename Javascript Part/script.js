const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
// // console.log(schools.join(", "));
// // console.log(schools[0]);
// const wschool = schools.filter((schools) => schools[0] === "W");
// console.log(wschool);

// const cutSchool = (cut, list) => list.filter((school) => school !== cut);
// console.log(cutSchool("Washington & Liberty", schools).join(", "));
// // "Yorktown, Wakefield"
// console.log(schools.join("\n"));
// const highSchools = schools.map((school) => ({ name: school }));
// console.log(highSchools.name);
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
console.log(`${age} > ${max} = ${age > max}`);
if (age > max) {
return age;
} else {
return max;
}
}, 0);
console.log("maxAge", maxAge);