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



document.getElementById('toggleButton').addEventListener('click', function() {
    const text = document.getElementById('text');
    text.classList.toggle('highlight');
});
