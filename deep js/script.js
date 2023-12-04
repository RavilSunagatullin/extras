// prototype
// ========================================================================
// // В js все объекты
// // Класс Object самый главный
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