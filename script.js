let numberOne = prompt('Digite o primeiro número:')
let numberTwo = prompt('Digite o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A mutiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)

pairOrOdd = (numberOne + numberTwo) % 2

if (pairOrOdd == 0) {
    alert(`A soma dos dois números é par: ${numberOne + numberTwo}`)
}else {
    alert(`A soma dos dois números é impar: ${numberOne + numberTwo}`)
}

if (numberOne == numberTwo) {
    alert('Os dois números são iguais.')
} else {
    alert('Os dois números são diferentes.')
}
