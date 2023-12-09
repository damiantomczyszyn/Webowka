//const let lub var

const age: number = 54;
let surname: string = 'Potter';

let postcode = 10;

// : typ =

//tuples stablice o stałej strukturze

//enum - PascalCase

//w funkcjach nie trzeba definiować zwracanego typu, ale lepiej go definiować
// function helloWorld(): void{}
// argumenty tak samo  (word: string, info?: string)

//obiekty 
const user:{id:number} = {id:12}
// w typescripcie user.name nie doda name bo obiekt nie ma takiego properties
// trzeba zainicjalizować paramatr obiektu albo kod sie nie skompiluje

//user rozszerzamy o typ admin z a pomocą znaku & user&admin

//można tworzyć unie za pomocą znaku |  -> number | string | bool

//unia może powstać na podstawie literału- dokładnej wartości np true i wtedy wejdzie tylko true dozwolone

//typ unknown i typ any.
//typ never - gdy wiemy że funkcja nic nie zwróci.

//tsc --init - dodanie wielu konfigów ts
// plik tsconfig.json

//kompilacja pliku tsc do js bo przegladarka umie tylko js i nastepnie wykorzystanie nodem js

//tsc file.ts