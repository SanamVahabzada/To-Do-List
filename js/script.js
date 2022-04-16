let add = document.querySelector('button');
let list = document.querySelector('.list');
let input = document.querySelector('input');
let inputPart = document.querySelector('.inputPart');
let filter = document.querySelector('.filterIcon');
let remove = document.querySelector('.removeIcon');
let error = document.querySelector('.error');
let sortIcon = document.querySelector('#sort');




function create() {
    let p = document.createElement('p');
    p.className = "created-list";
    let span1 = document.createElement('span')
    span1.className = 'list-item'
    let text = document.createTextNode(input.value);
    let span = document.createElement('span');
    let text2 = document.createTextNode('\u2716');
    span.className = 'delete'


    if (input.value === '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        list.style.display = 'block';
        p.append(span1);
        span1.append(text);
        list.append(p);
        span.append(text2);
        list.append(p);
        p.append(span);
    }
    input.value = "";

    span.addEventListener('click', () => {
        p.remove();
        if (list.innerHTML == '') {
            list.style.display = 'none';
        }
    });
}

remove.addEventListener('click', () => {
    input.value = "";
});

add.addEventListener('click', create);


let a = 0;
function sort() {
    a++;
    let listItems = document.querySelectorAll('.list-item');
    let arr = [];
    listItems.forEach(items => {
        arr.push(items.innerText);
    });
    if (a === 1) {
        arr.sort()
        arr.forEach((item, i) => {
            listItems[i].innerText = item;
        });
        filter.style.display = 'none'
        sortIcon.style.display = 'block';
        inputPart.style.display = 'none';
        error.style.display = 'none';


    } else if (a === 2) {
        arr.sort().reverse();
        arr.forEach((item, i) => {
            listItems[i].innerText = item;
        });

        sortIcon.style.display = 'none';
        filter.style.display = 'block';
        inputPart.style.display = 'none';

    }

    else {
        arr.sort()
        arr.forEach((item, i) => {
            listItems[i].innerText = item;
        });
        filter.style.display = 'none'
        sortIcon.style.display = 'block';
        inputPart.style.display = 'block';
        a = 0;
    }
}
filter.addEventListener('click', sort);
sortIcon.addEventListener('click', sort);

document.addEventListener('keypress', (event) => {
    if(event.keyCode === 13){
        create();
    }
});