/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
let cat ={
    name:'Fumaça',
    idade: 10,
    cor: ['Cor do Gato'],
    melhoresAmigos: ['Amigo 1', 'Amigo 2', 'Amigo 3'],
    som: function(){
        return 'MMIIIAAUUUUUU'
    },
    adicionarAmigos: function(friend){
        this.melhoresAmigos.push(friend)
    },
    adicionarCor: function(corGato){
        this.cor.push(corGato)
    }
}
console.log(cat);
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.idade}", "color", que recebeu "${cat.cor}", "bestFriends", que recebeu um array com os itens "${cat.melhoresAmigos.join(', ')}", e "sound", que recebeu uma função que retorna "${cat.som()}".`);

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat.idade = cat.idade + 2
console.log(cat.idade);


/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
cat.adicionarAmigos('João')
console.log(cat.melhoresAmigos);




/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
cat.adicionarCor('azul')
console.log(cat.cor);
/*

  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

const isObject = obj => typeof obj =='object'
console.log(isObject(cat));
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
    nome: 'Yoshi',
    idade: 5,
    cor: 'Preta',
    melhoresAmigos:['Penelope','Amélia','Boia'],
    somaIdadeDogCat: function (){
        return `A soma das idades de ${dog.nome} e ${cat.name} é ${this.idade+cat.idade}.`
    }
}
console.log(dog.somaIdadeDogCat());

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = car => {
    let isCarRenegade = car === 'Jeep Renegade'
    let isCarHRV = car === 'Honda HR-V' 
    let isCarEcoSort =car === 'Ford EcoSport'
    let isCarIX35 = car === 'Hyundai iX35'
    retorno = false
    if (  isCarRenegade || isCarHRV ||  isCarEcoSort|| isCarIX35) {
      retorno = true
    }
  
    return retorno
  }
  
  console.log(isAnSUV('Honda Civic'))
  console.log(isAnSUV('Ford EcoSport'))
  
  /*
    09
  
    - Crie uma função que recebe um parâmetro 'type';
    - Dentro da função, crie um objeto com as seguintes propriedades:
      - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
      - undefined, que recebe a mensagem 'Representa um valor não-setado.'
      - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
    - Se o valor que o parâmetro type receber corresponder à alguma das 3  
      propriedades, retorne a mensagem que a propriedade armazena;
    - Teste a função, exibindo no console a mensagem de cada propriedade.
  */
  
const typeOfObjects = type=>{
    let tipo ={
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object:'Arrays, Datas, Objetos literais, Funções, etc.'
    }
    return tipo[type]
}
console.log(typeOfObjects('object'))