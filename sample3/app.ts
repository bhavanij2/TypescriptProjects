interface Person {
  name: string;
  age: number;
  job?: { title?: string };
}

function getPerson(): Person {
  return {
    name: "bha",
    age: 20,
    job: null,
  };
}

let res1 = getPerson().job?.title;

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
