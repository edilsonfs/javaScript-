const FirstName = 'Edilson'
const LastName = 'Ferreira da Silva'

const FullName = FirstName+ ' '+ LastName
const email = 'edilson.mx@gmail.com'

console.log(FirstName)
console.log(LastName)
console.log(FullName)


console.log('Nome completo Maiúsculo')
console.log(FullName.toUpperCase())
console.log('Nome completo Minúsculo')
console.log(FullName.toLowerCase())
console.log(`O nome completo contém ${FullName.length} caracteres`)

console.log(`Email:${email}`)
console.log(`A posição do @ na String é ${email.indexOf('@')}`)