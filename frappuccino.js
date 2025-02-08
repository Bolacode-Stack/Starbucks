let output;

let listing = document.querySelectorAll('.listing');
let index = document.querySelector('.index');
const icon = document.querySelector('#icons');
const div = document.querySelector('.chevron-down')
const group = document.querySelector('.list-group');
const listHead = document.querySelector('.list-head');

let one =  document.querySelectorAll('.one > li');
const two = document.querySelector('.two > li');
const three = document.querySelector('.three > li');

let indexes = [one, two, three];

indexes.forEach((item, index)  =>  {
        // console.log(item, index)
})

function openAccordion(e)   {
        one.forEach((item)  =>  {
                if (e.target.classList.contains('list-head'))  {
                   item.style.display = 'block';
                }
        })
}

group.addEventListener('click', openAccordion);
