// Loops o blucles = Se asocia a com si fuera una estructura de control

// for, ejecutarse segun lo lanzamos, tiene una condicion qure se va a avaluar cada vez que se recorre ese bucle, mientras siga en true seguira ejecutandose, al llegar a false se detendra la ejecucion

for (let i = 0; i < 5; i++) {
  // La i es indice no sabia JAJA, el codigo dice que indice vale 0 y que su primer valor es 0, indice es menor que 5 y incrementamos indice con ++ y i empieza a valer 1
  console.log(`Hola ${i}`); // Nos esta dando el valor del indice
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  // nos dara los numeros que estan en const, ya que se puso que el indice es menor que la variable.longitud
  console.log(`Elemento: ${numbers[i]}`); // En consola dira Elemento: y el numero, en este caso empezara en 1
}

// while
