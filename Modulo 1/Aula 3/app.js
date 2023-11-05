
const email = 'laracroft@gmail.com'
const lastIndexOfA = email.lastIndexOf('@')

const idEmail = email.slice(0,lastIndexOfA)
const provedorEmail = email.slice(lastIndexOfA , (email.length) )
console.log(`O id do email é ${idEmail}`)
console.log(`O provedor de e-mail é: ${provedorEmail}`)

