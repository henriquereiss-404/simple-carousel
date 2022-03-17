const slider = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide')

let index = 1
let current_slide_width = slides[index].offsetWidth
let grid_gap = slider.style.columnGap = '16px'
let clones = []

slides.forEach((node, index) => {
    clones.push(node.cloneNode(true))
    slider.appendChild(clones[index])
})

export default function slide() {
    setInterval(() => auto_slide(), 2000)
}

function auto_slide() {
    slider.style.transform = `translateX(-${(current_slide_width + parseInt(grid_gap)) * index}px)`   
    index == (slides.length) ? index = 0 : index++
}