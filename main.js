const startTimer=(duration, display)=> {
    function startCountdown(seconds) {
        let counter = seconds;
          
        const interval = setInterval(() => {
        //   console.log(counter);
          counter--;
          display.textContent =  counter; 
          if (counter < 0 ) {
            clearInterval(interval);
            // console.log('Ding!');
            alert("Game Over! \nYour score is " + score)
            window.location.reload(true); 
          }
        }, 1000);
      }
      startCountdown(duration)
}

window.onload = () => {
    let durationInSeconds = 60 
    let display = document.querySelector('#time');
    startTimer(durationInSeconds, display);
};
        

const cursor1 = document.querySelector('.cursor')
// selecting all holes and storing it in array using spread operator
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
const levelEl = document.querySelector('.level span')
let score = 0
let level = "Easy"

const sound = new Audio("assets/smash_1.mp3")

const run=()=>{
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    img.addEventListener('click', () => {
        // increment in score and sound 
        score += 10
        sound.play()
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
    if(score < 50 ){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1500)
    }
        // Medium level 
    else if(score < 70){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1200)
        levelEl.textContent = level
        level = "Medium"
    }
        // Hard level 
    else if(score <= 130){
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1000)
        level = "Hard"
    }
    // so our mole keep appearing even after score set for hard level 
    else{
        timer = setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 1000)
    }

}
run()

window.addEventListener('mousemove', e => {
    cursor1.style.top = e.pageY + 'px'
    cursor1.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor1.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor1.classList.remove('active')
})


