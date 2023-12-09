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


