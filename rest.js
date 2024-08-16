const obj = {
  name: "Sameed",
  age: "19",
  college: "famt",
  city: "ratnagiri",
};

const { name, age, ...rest } = obj;
const result = { ...rest };
console.log(result);
