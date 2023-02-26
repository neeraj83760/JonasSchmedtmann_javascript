
let container = document.querySelector('.table')

let res = fetch('https://jsonplaceholder.typicode.com/todos/users')

let p = res.then(function(res) {return res.json()})
p.then(function(data){

const html = `

<tr>
<td>${data.id}</td>
<td>${data.title}</td>
<td>${data.completed}</td>
</tr>
`
container.innerHTML += html; 

console.table(data)})