let add = document.querySelector('button');
let list = document.querySelector('.list');
let input = document.querySelector('input');

add.addEventListener('click', () => {
    let p = document.createElement('p');
    let inputValue = document.getElementById('input').value
    let t = document.createTextNode(inputValue);
    p.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        list.appendChild(p);
    }
    input.value = "";
})



