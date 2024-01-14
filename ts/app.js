"use strict";
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
const userJson = JSON.stringify({
    users: [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Mary", age: 21 },
        { id: 3, name: "Peter", age: 22 },
        { id: 4, name: "Ann", age: 23 },
    ],
    friends: [
        [1, 2],
        [1, 3],
        [3, 2],
    ],
});
function getUserFriends(json, num) {
    const users = JSON.parse(json).users;
    const friends = JSON.parse(json).friends;
    let result = [];
    friends.forEach((friend) => {
        if (friend.includes(num)) {
            let id = friend[0] === num ? friend[1] : friend[0];
            const returnUser = users.find((user) => user.id === id);
            if (typeof returnUser !== "undefined") {
                result.push(returnUser);
            }
        }
    });
    return result;
}
