console.log(true, false,'true','false')

const email = 'edilson.mx@gmail.com'
const include = email.includes('@')
console.log(`Valor método includes em variável ${include}`)
let arrayNomes =['Edilson', 'Daniel', 'Maria','João','Pedro']
function verificaNome(nome) {
    return nome.includes('Daniel')    
}
console.log(arrayNomes.map(verificaNome))

const age = 31
console.log(age===31)
console.log(age=='31')
console.log(age==='31')