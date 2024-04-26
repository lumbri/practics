let people = [
    {
        name: "Kateryna",
        age: 17,
        hobby: "playing football",
        img: 'img/Kateryna.jpg'
    },
    {
        name: "Ana",
        age: 28,
        hobby: "yoga",
        img: 'img/Ana.jpg'
    },
    {
        name: "Alona",
        age: 58,
        hobby: "eating",
        img: 'img/Alona.jpg'
    },
    {
        name: "Burak",
        age: 14,
        hobby: "birds",
        img: 'img/Burak.jpg'
    },
    {
        name: "Khalid",
        age: 38,
        hobby: "watching TV",
        img: 'img/Khalid.jpg'
    },
    {
        name: "Maksym",
        age: 42,
        hobby: "dogs",
        img: 'img/Maksym.jpg'
    },
    {
        name: "Mariia",
        age: 19,
        hobby: "make up",
        img: 'img/Mariia.jpg'
    },
    {
        name: "Olesia",
        age: 21,
        hobby: "cooking",
        img: 'img/Olesia.jpg'
    },
    {
        name: "Taha",
        age: 66,
        hobby: "smoking",
        img: 'img/Taha.jpg'
    }
];

for (let key in people){
    document.querySelector('.list').innerHTML += `<li>  <img src='${people[key].img}'/> <h3> ${people[key].name} </h3> <p> Age: ${people[key].age} </p> <p>Hobby: ${people[key].hobby}</p></li>`
};
