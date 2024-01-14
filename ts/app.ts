// function welcomePerson(person: Person) {
//   console.log(`Hey ${person.firstName} ${person.lastName}`);
//   return `Hey ${person.firstName} ${person.lastName}`;
// }
// const james = {
//   firstName: "James",
//   lastName: "Quick",
// };
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// welcomePerson(james);

// function multiple(a:number, b:number) {
//   return a * b;
// }
// console.log(multiple(3, 8))

// function repeat(text: string, count: number) {
//   return text.repeat(count);
// }
// console.log(repeat("Hello", 3));

// function getHiddenCard(text: string, count: number = 4):string {
//   return "*".repeat(count) + text.slice(-4)
// }
// console.log(getHiddenCard('1234567812345678'))

// const numbers = [1, 3, 8, 9, 100, 23, 55, 34];
// const getEvenNumbers = () => numbers.filter((num: number) => !(num % 2));
// console.log(getEvenNumbers);

// function filterAnagrams(text: string, arr:string[]): string[] {
//   let chars = text.split('');
//   arr.forEach(char =>{
//     char.split('')
//   })
//   return chars
// }
// const filterAnagrams = (word: string, anagrms: string[]): string[] =>
//   anagrms.filter(
//     (anagrama) =>
//       anagrama.split("").sort().join("") === word.split("").sort().join("")
//   );
// console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

// const course = {
//   name: "Java",
//   lessons: ["variables", "functions", "conditions", "functions", "conditions"],
// };
// console.log(isComplete(course))
// function isComplete(course: { name: string; lessons: string[] }):boolean {
//   return course.lessons.length >= 4;
// }

// enum ModalStatus {
//     Opened,
//     Closed,
//   }
// function buildModal(text: string, status:ModalStatus): {text: string, status:ModalStatus} {
//     return {
//         text,
//         status
//     }
// }
// console.log(buildModal('hexlet forever', ModalStatus.Opened))

// type User = {
//   name: string;
//   age: number;
// };
// const user1 = {
//   name: "sem",
//   age: 5,
// };
// const user2 = {
//   name: "inna",
//   age: 5,
// };
// console.log(getOlderUser(user1, user2));
// function getOlderUser(user1: User, user2: User): User | null {
//   if (user1.age > user2.age) {
//     return user1;
//   }
//   if (user1.age < user2.age) {
//     return user2;
//   }
//   return null;
// }

// console.log(getParams('per=10&page=5'));
// function getParams(url: string) {
//   let params = url.split("&");
//   let result: any = {};
//   params.map((param) => param.split("=")).forEach((param) => {
//     result[param[0]] = param[1];
//   })
//   return result;
// }

// namespace Company {
//   export function isEmployeeEmail(email: string, domain: string): boolean {
//     return email.endsWith("@" + domain);
//   }
// }
// type User = {
//   email: string;
// };
// function authorize(user: User | null): boolean {
//   const companyDomain = "hexlet.io";
//   const email = user?.email ?? "";
//   return Company.isEmployeeEmail(email, companyDomain);
// }
// console.log(authorize({ email: 'hexlet.io@example.com' }));

// const numbers = [1, -5, 2, 3, 4, 133];
// function filteR(arr: number[], callback: (n: number) => boolean):number[] {
//     return arr.filter(callback);
// }
// console.log(filteR(numbers, (n) => n % 2 == 0))

// function maP(arr: number[], callback: (n: number, index: number) => number):number[] {
//   return arr.map(callback);
// }
// console.log(maP([10, 10, 10], (n: number, index) => n + index));

// forEach([8, 9, 1, 2, 3], (n, index) => console.log(index + n));
// function forEach(arr: number[], callback: (n: number, index: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }

// function fail():never{
//     throw new Error;
// }

// function isPlainObject(value: unknown): boolean {
//   return value instanceof Object && !Array.isArray(value);
// }
// console.log(
//   isPlainObject(1), // false
//   isPlainObject("hexlet"), // false
//   isPlainObject({}), // true
//   isPlainObject({ name: "code-basics" }), // true
//   isPlainObject([1, 8]) // false
// );

// const course = { lessons: ['intro', 'lala'] };
// function lessonsCount({lessons}:{lessons:string[]}):number{
//     return lessons.length
// }
// console.log("file: app.ts:157 ~ lessonsCount(course);:", lessonsCount(course))

// function unique(value:(number|string)[]): (number |string)[]{
//     return Array.from(new Set(value))
// }
// console.log(unique([]), unique([2, 3, -100, -100, -100]), unique(['as', 'good', 'as', 'it', 'gets']))

// function getFiels(num:number):Array<Array<null>>{
//     return Array.from({length: num}, () => Array.from({length: num}, () => null))
// }
// console.log(getFiels(5))

// function reverse(arr: readonly number[]): number[] {
//   let result:number[] = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result
// }
// reverse([8, 3, 9]);

// type Point = [number, number, number];
// const p1: Point = [1, 3, 4];
// const p2: Point = [1, 3, 4];
// const p3: Point = [0, 8, 4];
// function isEqual(p1: Point, p2: Point): boolean {
//     return p1[0] === p2[0] && p1[1] === p2[1] && p1[2] === p2[2];
// }
// console.log(isEqual(p1, p3));

// const str = 'test';
// function lastIndex(str: string, char: string): number | null {
//   return str.lastIndexOf(char) === -1 ? null : str.lastIndexOf(char)
// }
// lastIndex(str, 't'); // 3
// lastIndex(str, 'p'); // null

// function formatPrice(price?: number | null): string {
//     if(typeof price === 'number') {
//         return `$${price.toFixed(2)}`;
//     }
//     return `$0.00`;
// }
// formatPrice(3.145); // '$3.15'
// formatPrice(200); // '$200.00'
// formatPrice(); // '$0.00'
// formatPrice(null); // '$0.00'

// type Turtle = "turtle" | null;
// type Game = {
//   makeTurn: (direction: "left" | "right") => void;
//   state: Array<Turtle>;
// };
// const startGame = (): Game => {
//   const state: Array<Turtle> = ["turtle", null, null, null, null];
//   function makeTurn(direction: "left" | "right") {
//     let index = state.indexOf("turtle");
//     let nextIndex = direction === "left" ? index - 1 : index + 1;
//     if(nextIndex < 0 || nextIndex > 4){
//         throw new Error('Out of bounds');
//     }
//     state[index] = null;
//     state[nextIndex] = "turtle";
//   }
//   return { makeTurn, state };
// };

// type Form = {
//   age: {
//     value: number;
//     validator: (val: number) => boolean;
//   };
//   name: {
//     value: string;
//     validator: (val: string) => boolean;
//   };
// };
// const form: Form = {
//   age: {
//     value: 17,
//     validator: (val: number) => val >= 18,
//   },
//   name: {
//     value: "John",
//     validator: (val: string) => val.length >= 3,
//   },
// };

// type User = {
//   id: number;
//   name: string;
//   age: number;
// };
// type Friends = [number, number];
// type UserResponse = {
//   users: User[];
//   friends: Friends[];
// };
// const userJson = JSON.stringify({
//   users: [
//     { id: 1, name: "John", age: 20 },
//     { id: 2, name: "Mary", age: 21 },
//     { id: 3, name: "Peter", age: 22 },
//     { id: 4, name: "Ann", age: 23 },
//   ],
//   friends: [
//     [1, 2],
//     [1, 3],
//     [3, 2],
//   ],
// });
// function getUserFriends(json: string, num: number): User[] {
//   const users: User[] = JSON.parse(json).users;
//   const friends: Friends[] = JSON.parse(json).friends;
//   let result: User[] = [];
//   friends.forEach((friend) => {
//     if (friend.includes(num)) {
//       let id = friend[0] === num ? friend[1] : friend[0];
//       const returnUser = users.find((user) => user.id === id);
//       if (typeof returnUser !== "undefined") {
//         result.push(returnUser);
//       }
//     }
//   });
//   return result;
// }

// enum LoadingStatus {
//   Loading = 'Loading',
//   Success = 'Success',
//   Error = 'Error',
// }
// type DataState = {status: LoadingStatus.Loading} | {status: LoadingStatus.Error, error: Error} | {status:LoadingStatus.Success, data:number}
// function handleData(status:DataState):string{
//   if (status.status === LoadingStatus.Loading){
//       return 'loading...'
//   }
//   if (status.status === LoadingStatus.Error){
//       return status.error.message
//   }
//   if(status.status === LoadingStatus.Success){
//       return String(status.data)
//   }
//   return 'unknown'
// }
// const loading: DataState = { status: LoadingStatus.Loading };
// handleData(loading)
// const success: DataState = { status: LoadingStatus.Success, data: 42 };
// handleData(success)
// const error: DataState = { status: LoadingStatus.Error, error: new Error('error') };
// handleData(error)
// const unknown = { status: 'unknown' };
// // @ts-expect-error type '{ status: 'unknown' }' is not assignable to type 'DataState'.
// handleData(unknown)

// type Wallet = {
//   balance: number;
//   transactions: Array<Transaction>;
// };
// type Transaction = {
//   apply: (amount: number) => number;
// }
// const wallet: Wallet = {
//   transactions: [
//     {
//       apply: (amount) => amount + 1,
//     },
//   ],
//   balance: 0,
// };
// function applyTransactions(wallet:Wallet):number {
//   try{
//     let balance = wallet.balance;
//     wallet.transactions.forEach((transaction:Transaction) => {
//       balance = transaction.apply(balance);
//     })
//     return balance;
//   }catch(e){
//     return wallet.balance
//   }
// }

// class CustomFile {
//   name:string;
//   size:number;
//   constructor({name, size}:{name:string, size:number}){
//       this.name = name
//       this.size = size
//   }
//   toString(){
//       return `${this.name} (${this.size} bytes)`
//   }
// }