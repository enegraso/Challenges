num1 = prompt('Ingrese primer numero')
num2 = prompt('Ingrese segundo numero')
cuenta = prompt("Ingrese operador matemático \n Escriba + p/suma \n Escriba - p/resta" +
                "\n Escriba * p/multiplicar \n Escriba / p/dividir \n Escriba p para potenciar" +
                "\n Escriba r para raiz")
num1 = parseInt(num1)
num2 = parseInt(num2)

switch (cuenta) {
    case '+':
        var suma = num1 + num2
        alert (num1 + " más " + num2 + " = " + suma)
        break;
    case '-':
        var resta = num1 - num2
        alert (num1 + " menos " + num2 + " = " + resta)
        break;
    case '*':
        var multi = num1 * num2
        alert (num1 + " por " + num2 + " = " + multi)
        break;
    case '/':
        var divid = num1 - num2
        alert (num1 + " dividido " + num2 + " = " + divid)
        break;
    case 'p':
        var poten = Math.pow(num1,num2)
        alert (num1 + " elevado a " + num2 + " = " + poten)
        break;
    case 'r':
        var raiz = Math.ceil(Math.pow(num1, 1 / num2))
        alert (" raíz " + num2 + " de " + num1 + " = " + raiz)
        break;    
    default:
        alert("No se pudo hacer la operacion")
}
