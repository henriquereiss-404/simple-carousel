const slider = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide')

let index = 1
let current_slide_width = slides[index].offsetWidth
let grid_gap = slider.style.columnGap = '16px'

export default function slide() {
    setInterval(() => auto_slide(), 2000)
}

function auto_slide() {
    slider.style.transform = `translateX(-${(current_slide_width + parseInt(grid_gap)) * index}px)`   
    index == (slides.length - 1) ? index = 0 : index++
}