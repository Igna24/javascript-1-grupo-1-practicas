// Escriba un programa que imprima, utilizando ciclos, un cuadrado de 10x10
// caracteres, formado por 2 triángulos, uno con el carácter '#' y el otro con el carácter '*':

let x = 10

function cuadrado() {
  for (let i = 1; i <= x; ++i) {
    let resultado = ''
    for (let j = 10; j >= i; j--) {
      resultado += '* '
    }
    for (let x = 1; x <= i; ++x) {
      resultado += '# '
    }
    console.log(resultado)
  }
}
cuadrado()