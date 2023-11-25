const socialCircle = document.querySelectorAll('.social-circle')

const socialIcons = document.getElementById('social-icons')

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