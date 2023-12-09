let zmienna1 = 2
var zmienna2 = 2
const zmienna3 = 2

console.log(2)
console.log(zmienna1)
console.log(1 == '1') // konwertuje porownanie
console.log(1 === '1') // wartosci bez przekształcania. Musza byc tego samego typu

console.log(1 >= '1') 
console.log(1 <= '2') 
console.log(3 >= '3') 

function jakasFunkcja() {
    console.log('cos wyswietlam')
}
function dodawanie(a, b){
    console.log(a+b)
    return a+b
}
const c = dodawanie(3,5)
jakasFunkcja()


const tab1 = new Array(1, 2, 3)
console.log(tab1)

const tab2 = new Array(10) // tablica  z 10 miejscami

const tab3 = [1] // tablica z 1 elementem
tab3.push(20)
console.log(tab3)

tab3.pop(20)
console.log(tab3)

let tab4 = [1,2,3,4,5,6,7,8,9,10]
console.log(tab4)



