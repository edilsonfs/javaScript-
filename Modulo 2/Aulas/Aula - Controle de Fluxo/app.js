const names = ['Linus', 'Ada', 'Bill']

// for (let i = 0; i < names.length; i++) {
//     const HtmlTemplate = `<p>${names[i]}</p>`
//     console.log(HtmlTemplate)
//     console.log(names[i])
// }
let i = 0;

while (i <names.length) {
    console.log(`Dentro do loop: ${names[i]}`)
    i++
}