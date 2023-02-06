const confirmDiv = document.getElementById("confirm")
let Name = window.localStorage.getItem("name")
let query = window.localStorage.getItem("query")
let email = window.localStorage.getItem("email")
console.log(Name,query,email)
const  greeting = document.getElementById("greeting")
const greetPara = document.getElementById('greeting-para')


greeting.innerText = `Thank You! ${Name.split(" ")[0]}`
greetPara.innerText = `We have received  your query and will get back to you as soon as possible on your email ${email} `