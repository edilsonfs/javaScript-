//function declaration 
function sayHi(){
    console.log('oi');
}
sayHi()
//parametros são utlizado na contrução da função, enquanto argumentos são utilizado quando a função está sendo invocada.
// function expression
const showFood = function(){
    console.log('pizza');
}

showFood()

const myFunc = function(name = 'Sem nome', lastName='Sem sobrenome'){
    console.log(`Oi ${name} ${lastName}!`);
}
myFunc('Edilson','Ferreira')

const double = function(number){
    return number**2
}
console.log(double(3));