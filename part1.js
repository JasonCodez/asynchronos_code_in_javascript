// #1
let baseURL = "http://numbersapi.com/";

let favNum = axios.get(`${baseURL}13?json`)
   .then(fact => {
      console.log(fact.data.text)
   })
// ***********************************************

// #2
const ul1 = document.querySelector("#list1");

let multNums = axios.get(`${baseURL}1?json`)
   .then(num1 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num1.data.number}`
      ul1.appendChild(li)
      return axios.get(`${baseURL}2?json`)
   })
   .then(num2 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num2.data.number}`
      ul1.appendChild(li)
      return axios.get(`${baseURL}3?json`)
   })
   .then(num3 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num3.data.number}`
      ul1.appendChild(li)
      return axios.get(`${baseURL}4?json`)
   })
   .then(num4 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num4.data.number}`
      ul1.appendChild(li)
   })
   .catch(err => {
      console.log(`There was a problem : (${ err })`)
   })

// **************************************************

// #3
const ul2 = document.querySelector("#list2");

let multFacts = axios.get(`${baseURL}13?json`)
   .then(num1 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num1.data.text}`
      ul2.appendChild(li)
      return axios.get(`${baseURL}13?json`)
   })
   .then(num2 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num2.data.text}`
      ul2.appendChild(li)
      return axios.get(`${baseURL}13?json`)
   })
   .then(num3 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num3.data.text}`
      ul2.appendChild(li)
      return axios.get(`${baseURL}13?json`)
   })
   .then(num4 => {
      let li = document.createElement("li")
      li.innerText = `The first number is ${num4.data.text}`
      ul2.appendChild(li)
   })
   .catch(err => {
      console.log(`There was a problem : (${ err })`)
   })


