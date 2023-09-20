// var header=document.querySelector('main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type=submit]');
// submit.value="SEND"

// var item = document.querySelector('list-group.item');
// item.style.color='red'

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color='blue';



var titles = document.querySelectorAll('.title');

console.log(titles);
titles[].textContent='Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'af4f4f4';
    even[i].style.backgroundColor = '#ccc';
}