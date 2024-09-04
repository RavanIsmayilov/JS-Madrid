// const btn = document.querySelector(".btn");
// const paragraf = document.querySelector(".paragraf");

// btn.addEventListener("click", () => {
//     if (btn.getAttribute("data-state") === "more") {
//         paragraf.classList.remove("more");
//         btn.setAttribute("data-state", "less");
//         btn.textContent = "See Less";
//     } else {
//         paragraf.classList.add("more");
//         btn.setAttribute("data-state", "more");
//         btn.textContent = "See More";
//     }
// });


// function changeText() {
//     const heading = document.getElementById('heading');
//     const paragraph = document.getElementById('paragraph');
    
//     heading.textContent = 'New Heading Text';
//     paragraph.textContent = 'This is the new paragraph text.';
// }


// document.getElementById('greetingForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 
    
//     const name = document.getElementById('name').value;
//     const greetingMessage = document.getElementById('greetingMessage');
    
//     greetingMessage.textContent = `Hello, ${name}!`;
// });



// document.getElementById('toggleButton').addEventListener('click', function() {
//     const text = document.getElementById('text');
//     text.classList.toggle('highlight');
// });

var slides = document.querySelectorAll(".slide")
var nextBtn = document.querySelector(".btn-next")
var prevBtn = document.querySelector(".btn-prev")

var currentIndex = 0;
var maxNumber = slides.length - 1;


// nextBtn.addEventListener("click", function () {
//     if (currentIndex === maxNumber) {
//         currentIndex = 0
//     } else {
//         currentIndex ++
//     }
    
//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
//     });
// })


// NextButtonClick()
// function NextButtonClick() {
//     if (currentIndex === maxNumber) {
//         currentIndex = 0;
//     } else {
//         currentIndex++;
//     }

//     slides.forEach((slide, index) => {
        
//         slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
//     });
// }
// nextBtn.addEventListener("click", NextButtonClick);



// prevBtn.addEventListener("click", () => {
//     if (currentIndex === 0) {
//         currentIndex = maxNumber
//     } else {
//         currentIndex --
//     }

//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
//     });
// })



// function PrevButtonClick() {
//     if (currentIndex === 0) {
//         currentIndex = maxNumber;
//     } else {
//         currentIndex--;
//     }

//     slides.forEach((slide, index) => {
//         slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
//     });
// }
// prevBtn.addEventListener("click", PrevButtonClick);

// let menuBar = document.getElementById('menu-bar');
// let nav = document.getElementById('nav');
// let menuBg = document.getElementById('menu-bg');

// function toggleMenu() {
//     menuBar.classList.toggle('change');
//     nav.classList.toggle('change');
//     menuBg.classList.toggle('change-bg');
// }


// const btn = document.querySelector(".btn")
// const text = document.querySelector(".text")
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 , 11]

// btn.addEventListener("click", () =>{

//     const evenNumber = arr.filter(number => number % 2 === 0)

//     text.textContent = evenNumber

// })



//----------------------------------------------------------------
// const div = document.querySelector(".div")
// const btn = document.querySelector(".btn")

// const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5"]

// btn.addEventListener("click", function(){

//     const randomIndex = Math.floor(Math.random() * colors.length);

//     div.style.backgroundColor = colors[randomIndex]

// })

//----------------------------------------------------------------

// const img = document.querySelector(".img")
// const btn = document.querySelector(".btn")

// const images = ["../assets/slider image 5.png", "../assets/slider image.png", "../assets/ticket image 1.png", "../assets/ticket image 2.png", "../assets/ticket image 3.png"]

// btn.addEventListener("click", function(){

//     const randomIndex = Math.floor(Math.random() * images.length);

//     img.src = images[randomIndex]

// })

//----------------------------------------------------------------


// const btn = document.querySelector(".btn")
// const audio = document.querySelector(".audio")

// const sound = ["../assets/talib-tale-omur-budur-2024-mp3_feat_az-tam-loqosuz.mp3"]

// btn.addEventListener("click", function(){

//     const randomIndex = Math.floor(Math.random() * sound.length);

//     audio.src = sound[randomIndex]

//     audio.play();

// })

//----------------------------------------------------------------

// localStorage.setItem('firstName', 'Ravan');
// localStorage.setItem('lastName', 'Ismayilov');


// const firstList = [...document.querySelectorAll("ul > li:first-child")];
// const lastList = [...document.querySelectorAll("ul > li:last-child")];

// firstList.forEach((li) => (li.textContent = "first"));

// lastList.forEach((li) => (li.textContent = "last"));

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    const overlay1 = document.getElementById('overlay1');
    const overlay2 = document.getElementById('overlay2');
    const toOverlay2 = document.getElementById('toOverlay2'); 
    const backToOverlay1 = document.getElementById('backToOverlay1');

    // Show the first overlay when the button is clicked
    btn.addEventListener('click', function() {
        overlay1.classList.toggle('visible');
    });

    // Switch to the second overlay
    toOverlay2.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        overlay1.classList.remove('visible');
        overlay2.classList.add('visible');
    });

    // Switch back to the first overlay
    backToOverlay1.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        overlay2.classList.remove('visible');
        overlay1.classList.add('visible');
    });

    // Close overlays when clicking outside content
    overlay1.addEventListener('click', function() {
        if ( overlay1) {
            overlay1.classList.remove('visible');
        }
    });

    overlay2.addEventListener('click', function() {
        if ( overlay2) {
            overlay2.classList.remove('visible');
        }
    });
});
