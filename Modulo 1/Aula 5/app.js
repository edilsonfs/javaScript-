//Arrays

let heroes = ['Batman','Iron Man','Spider Man', 'Hulk']
heroes[3] = 'Laterna Verde'
const ages = [31,25,40,50]
const randArray = ['Parker', 'Diana', 32,50]
const joinHeroes = heroes.join('|')
const otherHeroes = ['Wolverine', 'Senhor Fantástico']
const allHeroes = heroes.concat(otherHeroes)
console.log(allHeroes.indexOf('Wolverine'))
console.log(allHeroes)

const pushHeroes  = heroes.push('Nortuno')
console.log(pushHeroes)
console.log(heroes)
//O método pop remove o ultimo item o array e tem como retrono o itém removido. Trata-se de um método mutativo

const popHeroes = heroes.pop()
console.log(`popHeroes ${heroes} and ${popHeroes}`)

