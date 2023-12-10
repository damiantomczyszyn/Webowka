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

const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");
const addButtonElement = document.querySelector("#button");

addButtonElement.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum)
});


let test: string | number | boolean;

test = "test";
test = 21;
test = true;
//test = []; nie mozna bo nie zadeklarowane w 


const checkboxElement: HTMLInputElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.name = "name";
checkboxElement.id = "100";

document.body.appendChild(document.createElement('br'));
document.body.appendChild(checkboxElement);


console.log("koniec skryptu");