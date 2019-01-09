let size = 10; //wielkość fonta
let orderElement = 1;

const init = () => {
    let btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = 'Stwórz listę';
    btnReset.textContent = "Wyczyść";

    document.body.appendChild(btn);
    document.body.appendChild(btnReset);

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', clearLiElements);


};

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liElements = document.createElement('li');
        liElements.textContent = `Element nr ${orderElement++}`;
        liElements.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(liElements);
    }
};

const clearLiElements = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;


};

init();