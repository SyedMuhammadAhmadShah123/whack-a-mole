const cursor = document.querySelector('.cursor')
// selecting all holes and storing it in array using spread operator
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
const levelEl = document.querySelector('.level span')
let score = 0
let level = "Easy"

const sound = new Audio("assets/smash.mp3")

function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        // increment in score and sound 
        score += 10
        // sound.play()
        scoreEl.textContent = score
        levelEl.textContent = level
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

        // setting speed
        // Easy level 
    if(score < 10){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1500)
    }
        // Medium level 
    else if(score < 20){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1200)
        levelEl.textContent = level
        level = "Medium"
    }
        // Hard level 
    else if(score <= 30){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1000)
        level = "Hard"
    }
    // so our mole keep appearing even after score of 150 
    else{
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1000)
    }

}
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})