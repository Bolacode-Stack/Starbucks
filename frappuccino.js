let open, close;

let hamburger = document.querySelector(".hamburger");
let menuDiv = document.querySelector(".menu-div");
let coffeeShaker = document.querySelector(".coffee-shaker")
let toggle = document.getElementsByClassName('toggle');
let contents = document.getElementsByClassName('contents');
let icons = document.getElementsByClassName('icon');
let icon = document.querySelectorAll('.fa-solid');

hamburger.addEventListener("click", ()  =>  {
    hamburger.classList.toggle("active")
    menuDiv.classList.toggle("active")
});

coffeeShaker.addEventListener("click",  (e)  =>  {
     hamburger.classList.remove("active")
    menuDiv.classList.remove("active")
});

for (let i = 0; i < toggle.length; i++)  {
    toggle[i].addEventListener('click', ()   =>  {
        if (parseInt(contents[i].style.height) !== contents[i].scrollHeight)  {
            open = contents[i].style.height = contents[i].scrollHeight + "px";
            icons[i].classList.remove('fa-chevron-down');
            icons[i].classList.add('fa-chevron-up');
        } else {
            close = contents[i].style.height = "0px";
            icons[i].classList.remove('fa-chevron-up')
            icons[i].classList.add('fa-chevron-down')
        }
    })

    for (let i = 0; i < icon.length; i++)  {
        icon[i].addEventListener('click', (e)   =>  {
            if (close)  {
                icon[i].classList.toggle('green');
            }   
        })
    }
}

