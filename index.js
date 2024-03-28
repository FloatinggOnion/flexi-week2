const head = document.getElementById('head');
const name = document.getElementById('name')
const nameInput = document.getElementById('input');
const button = document.getElementById('btn');
let people = document.getElementById('people');
const category = document.getElementById('category');
let isUpper = false;

let nameArr = [];
sessionStorage.setItem('nameArr', JSON.stringify(nameArr));

const add = () => {

    let nameArrString = sessionStorage.getItem('nameArr');
    
    let retNameArr = JSON.parse(nameArrString);

    const newItem = nameInput.value.trim();
    if (newItem) {
        retNameArr.push(newItem);
        console.log(`Added ${nameInput.value}`);                

        nameInput.value = "";

        updateList(retNameArr);
    }
    nameArr = JSON.parse(nameArrString);
    nameArr = retNameArr;
    sessionStorage.setItem('nameArr', JSON.stringify(nameArr));
    console.log(retNameArr);
}

const search = (item) => {
    filteredNameArr = nameArr.filter((name) => {
        return name === item;
    });

    updateList(filteredNameArr);
}

const work = () => {
    if (category.value === "add") {
        add();
    } else {
        search(nameInput.value);
    }
}

const makeUpper = () => {
    nameArr = nameArr.map((name) => {
        return name.toUpperCase();
    });
    isUpper = !isUpper;

    updateList(nameArr);
}

const makeLower = () => {
    nameArr = nameArr.map((name) => {
        return name.toLowerCase();
    });
    isUpper = !isUpper;

    updateList(nameArr);
}

const toggleCase = () => {
    if (isUpper) {
        makeLower();
    } else {
        makeUpper();
    }
}

const normalCase = () => {
    const capitalizedNames = nameArr.reduce((acc, curr) =>
        `${acc}${curr[0].toUpperCase()}${curr.slice(1).toLowerCase()} `, ""
    );
    
    isUpper = false;
    
    updateList(capitalizedNames.trim().split(" "));
}


const updateList = (nameArr) => {
    people.innerHTML = "";  // Clear existing cards

    nameArr.forEach(item => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.textContent = item;
        people.appendChild(card);
    });

}

const init = () => {
    let nameArrString = sessionStorage.getItem('nameArr');
    nameArr = JSON.parse(nameArrString);
    console.log(nameArr);
}

init();