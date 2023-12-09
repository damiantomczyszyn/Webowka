console.log("test!");

let age: number = 29;

let ageAsString: string = "dwadziescia dziewiec";
ageAsString = `${age}`;

console.log(ageAsString);

const add = (v1: number, v2: number) => v1 + v2;
const add2 = (v1: number, v2: number = 5) => v1 + v2;
const add3 = (v1: number, v2?: number) => {
    v2 = v2 ?? 0;
    return v1 + v2
}


console.log(add(10, 40));
console.log(add2(20));
console.log(add3(20));

const input1Element = document.querySelector("#input1");
const input2Element = document.querySelector("#input2");
const addButtonElement = document.querySelector("#button");

addButtonElement.addEventListener("click", () => {
    const sum = add(input1Element.value, input2Element.value);
    console.log(sum)
});
