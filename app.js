const left = document.querySelector('.left')
const right = document.querySelector('.right')

const left_e30 = document.querySelector('.left-e30')
const left_e36 = document.querySelector('.left-e36')
const left_e46 = document.querySelector('.left-e46')

const rightE30 = document.querySelector('.e30')
const rightE36 = document.querySelector('.e36')
const rightE46 = document.querySelector('.e46')

left_e30.addEventListener('click', ()=>{
    rightE30.style.display = 'flex'
    rightE36.style.display = 'none'
    rightE46.style.display = 'none'
    left_e30.style.opacity = '.4'
    left_e36.style.opacity = '1'
    left_e46.style.opacity = '1'
})

left_e36.addEventListener('click', ()=>{
    left.style.opacity = '1'
    rightE36.style.display = 'flex'
    rightE30.style.display = 'none'
    rightE46.style.display = 'none'
    left_e36.style.opacity = '.4'
    left_e30.style.opacity = '1'
    left_e46.style.opacity = '1'
})

left_e46.addEventListener('click',()=>{
    rightE46.style.display = 'flex'
    rightE30.style.display = 'none'
    rightE36.style.display = 'none'
    left_e46.style.opacity = '.4'
    left_e30.style.opacity = '1'
    left_e36.style.opacity = '1'
})

right.addEventListener('click', ()=>{
    rightE30.style.display = 'none'
    rightE36.style.display = 'none'
    rightE46.style.display = 'none'
    left_e30.style.opacity = '1'
    left_e36.style.opacity = '1'
    left_e46.style.opacity = '1'
})