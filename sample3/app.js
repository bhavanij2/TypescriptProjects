var _a;
function getPerson() {
  return {
    name: "bha",
    age: 20,
    job: null,
  };
}
var res1 = (_a = getPerson().job) === null || _a === void 0 ? void 0 : _a.title;
console.log(res1);
// type Emp = {
//   name: string;
//   age: number;
// };
// const p: Emp = {
//   name: "BB",
//   age: 12,
// };
// console.log(p);
// function myprint(a: { name: string; age: number }) {
//   console.log(a);
// }
// myprint({ name: "asa", age: 122 });
