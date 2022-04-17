let add = document.querySelector('button');
let list = document.querySelector('.list');
let input = document.querySelector('input');
let filter = document.querySelector('.filterIcon');
let remove = document.querySelector('.removeIcon');
let error = document.querySelector('.error');
let sortIcon = document.querySelector('#sort');

// a list section creating function
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

    // deleting the created section
    span.addEventListener('click', () => {
        p.remove();
        if (list.innerHTML == '') {
            list.style.display = 'none';
        }
    });
}

// creates a list section on CLİCK
add.addEventListener('click', create);

// creates a list section with ENTER
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        create();
    }
});

// deleting the inside of the İNPUT
remove.addEventListener('click', () => {
    input.value = "";
});

// that SORTS the created list function
let a = 0;
function sort() {
    a++;
    let listItems = document.querySelectorAll('.list-item');
    let arr = [];
    listItems.forEach(items => {
        arr.push(items.innerText);
    });

    // sort in alphabetical order in the first click and delete input
    if (list.innerHTML !== '') {
        if (a === 1) {
            arr.sort()
            arr.forEach((item, i) => {
                listItems[i].innerText = item;
            });
            filter.style.display = 'none'
            sortIcon.style.display = 'block';
            input.parentElement.style.display = 'none';
            error.style.display = 'none';

            // with the second click, sort in reverse alphabetical order and delete input
        } else if (a === 2) {
            arr.sort().reverse();
            arr.forEach((item, i) => {
                listItems[i].innerText = item;
            });

            sortIcon.style.display = 'none';
            filter.style.display = 'block';
            input.parentElement.style.display = 'none';

        }

        // sort in alphabetical order in the third click and create input
        else if (a === 3) {
            arr.sort()
            arr.forEach((item, i) => {
                listItems[i].innerText = item;
            });
            filter.style.display = 'none'
            sortIcon.style.display = 'block';
            inputPart.style.display = 'block';
        }

        // with the second click, sort in reverse alphabetical order and create input
        else {
            arr.sort().reverse();
            arr.forEach((item, i) => {
                listItems[i].innerText = item;
            });
            filter.style.display = 'block'
            sortIcon.style.display = 'none';
            inputPart.style.display = 'block';
            a = 0;
        }
    }
}

// SORTS the create list
filter.addEventListener('click', sort);
sortIcon.addEventListener('click', sort);