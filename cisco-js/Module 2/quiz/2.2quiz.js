/* Question 1 */

let ticket = {
    fromWhere: "Ohio",
    toWhere: "Alabama",
    price: 69
};

console.log(`Ticket from: ${ticket.fromWhere}\nTicket to: ${ticket.toWhere}\nTicket Price: ${ticket.price}`)

/* Question 2 */

let person = {};

person.firstName = "Medea";
person.surname = "Solon";

console.log(`Name: ${person.firstName} ${person.surname}`);

/* Question 3 */

let bookShelf = [{bookTitle: "Speaking Javascript", author: "Axel Rauschmayer", pages: 460}, {bookTitle: "Programming Javascript Applications", author: "Eric Elliott", pages: 254}, {bookTitle: "Understanding ECMAScript 6", author: "Nicholas C. Zakas", pages: 352}];

console.log(`Array Length: ${bookShelf.length}`);

/* Question 4 */

bookShelf.push({bookTitle: "Learning JavaScript Design Patterns", author: "Addy Osmani", pages: 254});

console.log(`Array Length: ${bookShelf.length}`);

for (let i = 0; i !== bookShelf.length; i++)
{ 
    console.log(`Book Titles: ${bookShelf[i].bookTitle}`);
}

/* Question 5 */

let newShelf = bookShelf.slice(-2);

for (i = 0; i !== newShelf.length; i++)
{ 
    console.log(`Book Titles: ${newShelf[i].bookTitle}`);
}

/* Question 6 */

bookShelf.shift();
console.log(bookShelf.length);

for (i = 0; i !== bookShelf.length; i++)
{ 
    console.log(`Book Titles: ${bookShelf[i].bookTitle}`);
}

/* Question 7 */

let sum = 0;
for (i = 0; i !== bookShelf.length; i++)
{
    sum = sum + bookShelf[i].pages;
}
console.log(sum);