console.log("test!");
let age = 29;
let ageAsString = "dwadziescia dziewiec";
ageAsString = `${age}`;
console.log(ageAsString);
const add = (v1, v2) => v1 + v2;
const add2 = (v1, v2 = 5) => v1 + v2;
const add3 = (v1, v2) => {
    v2 = v2 !== null && v2 !== void 0 ? v2 : 0;
    return v1 + v2;
};
console.log(add(10, 40));
console.log(add2(20));
console.log(add3(20));
const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const addButtonElement = document.querySelector("#button");
addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
});
