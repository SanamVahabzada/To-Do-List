let add = document.querySelector('button');
let list = document.querySelector('.list');
let input = document.querySelector('input');
let filter = document.querySelector('.filterIcon');
let remove = document.querySelector('.removeIcon');
let error = document.querySelector('.error');



// function func() {
//     let p = document.createElement('p');
//     p.className = "list-item";
//     let text = document.createTextNode(input.value);
//     p.append(text);

//     if (input.value === '') {
//         alert("You must write something!");
//     } else {
//     list.append(p);
//     list.style.display = 'block';
//     }

//     input.value = "";
//     let span = document.createElement('span');
//     let text2 = document.createTextNode('\u00D7');
//     span.className = 'delete'
//     span.append(text2);
//     p.append(span);
//     list.append(p);

//     let listItems = document.querySelectorAll('.list-item');

//     span.addEventListener('click', () => {
//         p.remove();

//         if (listItems.length == 1) {
//             list.style.display = 'none';
//         }
//     });
// }

remove.addEventListener('click', () => {
    input.value = "";
});

add.addEventListener('click', () => {
    let p = document.createElement('p');
    p.className = "list-item";
    let text = document.createTextNode(input.value);
    let span = document.createElement('span');
    let text2 = document.createTextNode('\u2716');
    span.className = 'delete'


    if (input.value === '') {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        list.style.display = 'block';
        p.append(text);
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
});

function sort () {
    let listItems = document.querySelectorAll('.list-item');
    let arr = [];
    listItems.forEach(items => {
        arr.push(items.innerText);
    });
    arr.sort() 
    arr.forEach ((item,i)=> {
        listItems[i].innerText=item;
    })


}

filter.addEventListener('click', sort);