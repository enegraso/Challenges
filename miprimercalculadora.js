num1 = prompt('Ingrese primer numero')
num2 = prompt('Ingrese segundo numero')
cuenta = prompt("Ingrese operador matematico \n + p/suma \n - p/resta" +
                "\n * p/multiplicar \n / p/dividir")
num1 = parseInt(num1)
num2 = parseInt(num2)

switch (cuenta) {
  case '+':
    alert (num1 + num2)
    break;
  case '-':
    alert (num1 - num2)
        break;
  case '*':
    alert (num1 * num2)
        break;
  case '/':
    alert (num1 / num2)
        break;
    default:
    alert("No se pudo hacer la operacion")
}
