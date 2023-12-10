// prototype
// ========================================================================
// // В js все объекты
// // Класс Object самый главный
// prototype
// // Как создать Object
// const person = {
//   name: "Name",
//   Age: 1,
//   func: function () {
//     alert("func");
//   },
// };

// // Как создать Object чуть подругому
// const person2 = new Object({
//   name: "Name2",
//   Age: 2,
//   func: function () {
//     alert("func2");
//   },
// });

// // Изменение свойств прототипа
// Object.prototype.sayHello = function () {
//   console.log("Hello");
// };
// const lena = Object.create(person);
// lena.name = "Lena";

// // Строка тоже объект
// const str = new String("String");

// Контекст
// ========================================================================
// function hello() {
// //контекст онка
//   console.log("hello", this);
// }

// const person = {
//   name: "Name",
//   age: 1,
// //контекст объекта
//   func: hello,
// //контекст окна
//   funcWindow:hello.bind(window),
//   logInfo: function(some){
//     console.log(this.name, this.age, some)
//   }
// };

// const lena = {
//   name:'lena',
//   age:2
// }

// // варианты вызова функций
// person.logInfo.bind(lena)(123)
// person.logInfo.bind(lena, 'bind')()
// person.logInfo.call(lena, 'call')
// person.logInfo.apply(lena, ['apply'])

//комбинации прототипов и контекста
// const arr = [1, 2, 3, 4, 5]
// Array.prototype.multBy = function(n){
//   return this.map(function(i){
//     return i * n
//   })
// }

// Замыкания
// ========================================================================
// function createCalcFunc(n){
//   return function (){
//     console.log(1000 - n)
//   }
// }
// const calc = createCalcFunc(7)
// console.log(calc())

// function createIncrement(n) {
//   return function (num) {
//     return console.log(n + num);
//   };
// }
// const add1 = createIncrement(1);
// const add10 = createIncrement(10);
// add1(3);
// add10(3);

// function urlGenerator(domain){
//   return function(url){
//     return console.log(`https://${url}.${domain}`)
//   }
// }
// const comUrl = urlGenerator('com')
// comUrl('shop')

// небольшая практика по замыканиям
// function logPerson(){
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
// const person1 = {
//   name:'name1',
//   age:1,
//   job:1
// }
// const person2 = {
//   name:'name2',
//   age:2,
//   job:2
// }

// function bind(object, func){
//   return function(){
//     func.call(object)
//   }
// }
// bind(person1, logPerson)()

// Асинхронность
// ========================================================================
// event loop
// console.log('1')
// console.log('2')
// console.log('3')
// setTimeout(function (){
//   console.log('4')
// }, 2)
// setTimeout(function (){
//   console.log('5')
// }, 0)
// console.log('6')

// Promise
// ========================================================================
// 1 подход без промисов
// console.log('Request data...')
// setTimeout(()=>{
//   console.log('Preparing data...')
//   const backendData = {
//     server:'avs',
//     port:2000,
//     status:'working'
//   }
//   setTimeout(()=>{
//     backendData.modified = true
//     console.log('Data received', backendData)
//   }, 500)
// }, 500)

// 2 подход с промисами
// const promise = new Promise((resolve, reject) => {
//   console.log("Request data...");
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const backendData = {
//       server: "avs",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 500);
// });
// promise
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//       }, 500);
//     });
//   })
//   .then((clientData) => console.log("Data received", clientData))
//   .catch((err) => console.error("Error: ", err))
//   .finally(()=>console.log('Promise finally'))

// микро практика
// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// };
// // sleep(2000).then(()=>console.log('after sleep'))
// // работает в конце
// Promise.all([sleep(2000), sleep(3000)]).then(() => {
//   console.log('END')
// });
// // работает при 1 выполненном
// Promise.race([sleep(2000), sleep(3000)]).then(() => {
//   console.log('RACE')
// });

// Object
// ========================================================================
// побробное создание объекта
// const person = Object.create(
//   {
//     // prototype
//     calcAge() {
//       console.log(this.age);
//     },
//   },
//   {
//     name: {
//       //значение
//       value: "Name",
//       //виден ли ключ
//       enumerable: true,
//       //изменяется ли значение
//       writable: true,
//       //можно удалить
//       configurable: true,
//     },
//     age: {
//       value: 10,
//       enumerable: false,
//       writable: false,
//       configurable: false,
//     },
//     birthYear: {
//       get() {
//         //вызов или получение инф
//         return new Date().getFullYear() - this.age;
//       },
//       set(value) {
//         // отрабатывает при изменении верхенго
//       },
//     },
//   }
// );
// console.log(person);

// es6 class
// ========================================================================
// const animal = {
//     name:'name',
//     age:5,
//     hasTail:true
// }

// class Animal {
//   constructor(options) {
//     (this.name = options.name),
//       (this.age = options.age),
//       (this.hasTail = options.hasTail);
//   }
//   //только внутри класса
//   static type = "ANIMAL";

//   voice() {
//     console.log("voice");
//   }
// }
// const animal = new Animal({
//   name: "name",
//   age: 5,
//   hasTail: true,
// });
// class Cat extends Animal {
//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }
//   voice() {
//     console.log("cat`s voice");
//   }
//   get ageInfo(){
//     return this.age*7
//   }
//   set ageInfo(newAge){
//     return this.age = newAge
//   }
// }
// const cat = new Cat({
//   name: "cat",
//   age: 1,
//   hasTail: true,
//   color: "black",
// });
// практитка

// class Component {
//     constructor(selector){
//         this.$el = document.querySelector(selector)
//     }
//     hide(){
//         this.$el.style.display = 'none'
//     }
//     show(){
//         this.$el.style.display = 'block'
//     }
// }
// class Box extends Component{
//     constructor(options){
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }
// const box1 = new Box ({
//     selector: '#box1',
//     size:100,
//     color:'blue'
// })
// const box2 = new Box ({
//     selector: '#box2',
//     size:150,
//     color:'purple'
// })
// const box3 = new Box ({
//     selector: '#box3',
//     size:100,
//     color:'red'
// })

// async await
// ========================================================================
// const delay = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };
// const url = "https://jsonplaceholder.typicode.com/todos";

// подход через промисы
// function fetchTodos() {
//   console.log("start");
//   return delay(1000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then((response) => response.json());
// }

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

// async await
// async function fetchTodos() {
//   console.log("start");
//   try {
//     await delay(1000);
//     const resonpse = await fetch(url);
//     const data = await resonpse.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// }
// fetchTodos();

// proxy
// ========================================================================
// objects
// ====
// const person = {
//     name:'Name',
//     age:1,
//     isStupid:false
// }
// const objectProxy = new Proxy(person, {
//     get(target, prop) {
//         console.log('get')
//         return target[prop]
//     },
//     set(target, prop, value){
//         if(prop in target){
//             target[prop] = value
//         }else{
//             throw new Error('error')
//         }
//     },
//     has(target, prop){
//         return ['age', 'name', 'isStupid'].includes(prop)
//     },
//     deleteProperty(target, prop){
//         console.log('deleted', prop)
//         delete target[prop]
//         return true
//     }
// })
// functions
// ====
// const log = text =>{
//   return text
// }
// const functionProxy = new Proxy(log, {
//     apply(target, thisArg, args){
//         console.log('apply')
//         return target.apply(thisArg, args).toUpperCase()
//     }
// })
// classes
// ====
// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// const ClassProxy = new Proxy(Person, {
//     construct(target, args){
//         console.log('construct')
//         return new Proxy(new target(...args), {
//             get(t, prop){
//                 console.log('construct 2')
//                 return t[prop]
//             }
//         })
//     }
// })

// const p = new ClassProxy('P', 1)

// практика
// ====
// wrapper
// const withDefaultValue = (target, defaultValue) => {
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
//   });
// };
// const position = withDefaultValue(
//   {
//     x: 24,
//     y: 42,
//   },
//   0
// );

// // hiden properties
// const withHidenProps = (target, prefix = "_") => {
//   return new Proxy(target, {
//     has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
//     ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
//   });
// };
// const data = withHidenProps({
//   name:'name',
//   age:1,
//   _uid:'uid'
// })

// Генераторы
// ========================================================================

// function* strGenerator() {
//   yield 'h'
//   yield 'e'
//   yield 'l'
//   yield 'l'
//   yield 'o'
// }
// const str =  strGenerator()
// console.log(str.next())

// function* numberGen(n = 10){
//   for(let i = 1; i<=n; i++){
//     yield i
//   }
// }
// const num = numberGen(7)
// console.log(num.next())

// аналог
// const iterator = {
//   [Symbol.iterator](n = 10) {
//     let i = 0;
//     return {
//       next() {
//         if (i < n) {
//           return { value: ++i, done: false };
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   },
// };

// for (let k of iterator){
//   console.log(k)
// }
// for (let k of numberGen()){
//   console.log(k)
// }

// Array
// ========================================================================
// const people = [
//   { name: "Владилен", age: 25, budget: 40000 },
//   { name: "Елена", age: 17, budget: 3400 },
//   { name: "Игорь", age: 49, budget: 50000 },
//   { name: "Михаил", age: 15, budget: 1800 },
//   { name: "Василиса", age: 24, budget: 25000 },
//   { name: "Виктория", age: 38, budget: 2300 },
// ];
// 1
// for(let i = 0; i<people.length; i++){
//   console.log(people[i])
// }
// 2
// for (let k of people) {
//   console.log(k);
// }

// 3
// function(object, index, array)
// текущий объект, индекс, сам массив

// people.forEach(element => {
//   console.log(element)
// });

// Map
// ====
// const newPeople = people.map(person => {
//   return {
//     name:person.name,
//     age:person.age
//   }
// })
// console.log(newPeople)

// Filter
// ====
// const adults = []
// for(let i = 0; i<people.length; i++){
//   if(people[i].age >= 18){
//     adults.push(people[i])
//   }
// }

// const adults  = people.filter(person => {
//   if(person.age >= 18){
//     return true
//   }
// })

// const adults  = people.filter(person => person.age >= 18)

// Reduce
// ====
// let amount = 0
// for(let i = 0; i<people.length; i++){
//   amount += people[i].budget
// }

// const amount = people.reduce((total, person) => {
//   return total + person.budget
// }, 0);

// const amount = people.reduce((total, person) =>total + person.budget, 0);

// find
// ====
// const igor = people.find((person) => person.name === "Игорь");
// findIndex
// ====
// const igorInx = people.findIndex((person) => person.name === "Игорь");

// практика
// const amount = people
//   .filter((person) => person.budget > 3000)
//   .map((person) => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     };
//   })
//   .reduce((total, person)=> total + person.budget, 0)

// Map
// ========================================================================
// const obj = {
//   name: "Object",
//   length: 1,
// };
// const arr = [
//   ["name", "Map"],
//   ["length", 1],
// ];
// console.log(Object.entries(obj))
// console.log(Object.fromEntries(arr))

// const map = new Map(arr);
// map.set("uid", "213124124").set(obj, "value obj").set(NaN, "NaN");

// map.delete(NaN);
// console.log(map, map.size, map.has(NaN));
// map.clear()

// console.log(map.get("name"));
// console.log(obj.name);

// ====

// for (let [key, value] of map){
//     console.log([key, value])
// }
// for(let value of map.values()){
//   console.log(value)
// }
// for(let value of map.keys()){
//   console.log(value)
// }
// map.forEach((value, key, map)=>{
//   console.log(value, key)
// })
// ====
// const arrOfMap = [...map]
// const arrOfMap = Array.from(map)
// const objOfMap = Object.fromEntries(map)
// ====
// const users = [
//   {name:'name1'},
//   {name:'name2'},
//   {name:'name3'},
// ]

// const visits = new Map()
// visits
//   .set(users[0], new Date())
//   .set(users[1], new Date())
//   .set(users[2], new Date())

// function lastVisit(user){
//   return visits.get(user)
// }

// ====
// Set упрощенный map
// const set = new Set(['1', 2,  2, true, NaN])

// set.add(void 0).add(2)

// set.values()
// set.keys()
// set.entries()

// set.has(void 0)
// set.size
// set.delete(void 0)
// set.has(void 0)
// set.size
// set.clear()
// set.size

// практика
// function uniqValues(array){
//     return [...new Set(array)]
// }
// console.log(uniqValues([1, 2, 2, 3, 4, 3]))

// ====
// weak map
// let obj = {name:'weak-map'}
// const arr = [obj]
// obj = null

// get set delete has и все
// const map = new WeakMap([
//     [obj, 'obj data']
// ])
// obj = null
// ====
// const cash = new WeakMap()
// function cashUser(user){
//     if(!cash.has(user)){
//         cash.set(user, Date.now())
//     }
//     return cash.get(user)
// }

// let user1 = {name:'name'}
// let user2 = {name:'name2'}

// cashUser(user1)
// cashUser(user2)

// user1 = null

// weakset
// ====
// const users = [
//   {name:'name1'},
//   {name:'name2'},
//   {name:'name3'},
// ]
// const visits = new WeakSet()
// visits.add(users[0]).add(users[1])

// users.splice(1, 1)

// feetch, ajax, xhr
// ========================================================================
// const URL = "https://jsonplaceholder.typicode.com/users";

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = "json";
//     xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         return reject(xhr.response);
//       }
//       resolve(xhr.response);
//     };

//     xhr.onerror = () => {
//       reject(xhr.response);
//     };

//     xhr.send(JSON.stringify(body));
//   });
// }
// // sendRequest("GET", URL)
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err))

// const person = {
//     name:"name",
//     age:26
// }
// sendRequest("POST", URL, person)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

// feetch
// ====
// const URL = "https://jsonplaceholder.typicode.com/users";

// async function sendRequest(method, url, body = null) {
//   try {
//     const resonpse = await fetch(url, {
//       method: method,
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return await resonpse.json();
//   } catch (err) {
//     console.error(err);
//   }
// }

// // sendRequest("GET", URL)
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err))

// const person = {
//   name: "name",
//   age: 26,
// };

// sendRequest("POST", URL, person)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// rest, spread
// ========================================================================
const citiesRu = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
const citiesEr = ["Париж", "Прага", "Берлин"];

//spread
console.log(...citiesRu)
console.log(...citiesEr)

const allCities = [...citiesRu, ...citiesEr]
