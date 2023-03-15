const megaTeacher = {
    name: "Pablo",
    lastname: "Quintana",
    age: 27,
    vegan: false,
    address: {
        street: "Gran Vía",
        number: 73,
        floor: 4
    },
    hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
    height: 1.98
}

// ******************* #1 **********************
// 1. Escribe una función que acepte un hobbie y lo añada a la lista de hobbies de nuestro megaTeacher.


// const addHobbie = (hobbie) => megaTeacher.hobbies.push(hobbie);
// addHobbie("Futbol");
// console.log(megaTeacher.hobbies);



// ******************* #2 **********************
// Escribe un método `introduceMySelf` dentro del objeto que devuelva el siguiente string: `"Hola, me llamo <name> <lastname>, tengo [age] años y vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)"`.


// megaTeacher["introduceMySelf"] = `Hola, me llamo ${megaTeacher.name} ${megaTeacher.lastname}, tengo ${megaTeacher.age} años y vivo en la calle ${megaTeacher.address.street}, ${megaTeacher.address.number}. Mis hobbies son: ${megaTeacher.hobbies}`;
// console.log(megaTeacher.introduceMySelf);


// ******************* #3 **********************
// Modifica la primera función: debe aceptar un array de nuevos hobbies, y se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más.


// const addHobbie = (hobbies) => {
//     hobbies.forEach((element) => megaTeacher.hobbies.length < 8 ? megaTeacher.hobbies.push(element) : null)
// }
// addHobbie(["Futbol", "asda", "dasdasd", "asdasdasd", "4444444", "dasdasd"]);
// console.log(megaTeacher.hobbies);



// ******************* #4 **********************
// Escribe un método que te permita modificar los datos personales.


// const modifyPersonsDate = (name, lastname, age, vegan) => {
//     megaTeacher.name = name;
//     megaTeacher.lastname = lastname;
//     megaTeacher.age = age;
//     megaTeacher.vegan = vegan;
// }
// modifyPersonsDate("STEVEN", "DELGADO", 26, false);
// console.log(megaTeacher);



// ******************* #5 **********************
// Escribe un método que te permita modificar la dirección.


// const modifyAdress = (street, number, floor) => {
//     megaTeacher.address.street = street;
//     megaTeacher.address.number = number;
//     megaTeacher.address.floor = floor;
// }
// modifyAdress("cancion del olvido", 14, 4);
// console.log(megaTeacher);


// ******************* #6 **********************
// Modifica el metodo anterior para poder añadir una segunda dirección.


// const addNewAdress = (street, number, floor) => {
//     let adress1 = megaTeacher.address;
//     let adress2 = {
//         "street": street,
//         "number": number,
//         "floor": floor
//     }
//     megaTeacher.address = [adress1, adress2];
// }
// addNewAdress("cancion", 14, 4);
// console.log(megaTeacher);


// ******************* #7 **********************
// Escribe un método que en el array de libros, verifique si un libro existe en el array. Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.


// const verificBook = (libro) => megaTeacher.books.includes(libro) ? console.log(libro.toUpperCase()) : megaTeacher.books.push(libro);
// console.log(verificBook("Lord of the Flies"));



// ******************* #8 **********************
// Escribe una función que te permita añadir películas. Y si no tiene parámetro de entrada te retorne la película de en medio.


// const returnOrAddFilms = (films) => {
//     if (films) {
//         megaTeacher.films.push(...films);
//     } else {
//         return megaTeacher.films.splice((Math.round(megaTeacher.films.length / 2) - 1), (megaTeacher.films.length / 2))
//     }
// }
// console.log(returnOrAddFilms(["la casa de papel"]));
// console.log(megaTeacher);




