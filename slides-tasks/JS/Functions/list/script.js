let names = [
    {
        name: "Yuri",
        age: 40,
        hobby: "doing nothing",
        img: "img/Yuri.jpg"
    },
    {
        name: "Ana",
        age: 28,
        hobby: "yoga",
        img: "img/Ana.jpg"
    },
    {
        name: "Kateryna",
        age: 18,
        hobby: "coding",
        img: "img/Kateryna.jpg"
    }
];

for (let i=0; i < names.length; i++){
    document.querySelector('.list').innerHTML += `<li>${names[i]}</li>`
};
