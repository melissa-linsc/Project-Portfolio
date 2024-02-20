//Enlarging social icons on hovering

const socialCircle = document.querySelectorAll('.social-circle')

const socialIcons = document.getElementById('social-icons')

const linkedin = document.getElementById('linkedin')
const email = document.getElementById('email')
const github = document.getElementById('github')

socialCircle.forEach((circle, i) => {
    circle.addEventListener('mouseover', () => enlargeImg(i))
    circle.addEventListener('mouseout', () => reduceImg(i))
})

const enlargeImg = (i) => {
    socialCircle[i].style.height = '7rem';
    socialCircle[i].style.width = '7rem';
}

const reduceImg = (i) => {
    socialCircle[i].style.height = '5rem';
    socialCircle[i].style.width = '5rem';
}

//Enabling project cards to flip on click

const projects = document.querySelectorAll(".project");

function flipCard() {
  this.classList.toggle("flip");
}

projects.forEach((project) => project.addEventListener("click", flipCard));



