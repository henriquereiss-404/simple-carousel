const slider = document.querySelector('.slides')
let slides = document.querySelectorAll('.slide')

let index = 1
let current_slide_width
let column_gap = parseInt(window.getComputedStyle(slider).getPropertyValue('column-gap'))
let first_clone = slides[slides.length - 1].cloneNode(true)
let last_clones = []
let find_clone

slider.prepend(first_clone)
slides.forEach((node, index) => {
    let new_clone = node.cloneNode(true)
    new_clone.classList.add('slide', 'clone')
    last_clones.push(new_clone)
    slider.appendChild(last_clones[index])
})

export default function slide() {
    slides = document.querySelectorAll('.slide')
    setInterval(() => {
        auto_slide()
    }, 3000)
}

function auto_slide() {
    current_slide_width = slides[index].offsetWidth
    slider.style.transition = 'transform 1s'
    slider.style.transform = `translateX(-${(current_slide_width + column_gap) * index}px)`
    index++
}

slider.addEventListener('transitionend', () => {
    find_clone = [...slides[index].classList].find(element => element === 'clone')
    if (find_clone === 'clone'){
        slider.style.transition = 'none'
        slider.style.transform = 'translateX(0px)'
        index = 1
    }
})
