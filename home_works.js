// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const redExp = /^[a-z0-9._-]+@gmail\.com$/i

gmailButton.onclick = () => {
    if (redExp.test(gmailInput.value)) {
        gmailResult.style.color = 'green'
        gmailResult.innerHTML = 'OK'
    }else {
        gmailResult.style.color = 'red'
        gmailResult.innerHTML = 'invalid gmail'
    }
}


//MOVE BLOCK

const child_block = document.querySelector('.child_block')

let num = 0;
const square = () => {
    num++
    child_block.style.transform = `translateX(${num}px)`;

    if(num < 450) {
        requestAnimationFrame(square)
    }
}
square()
