const counter = document.getElementById('counter')
const pause = document.getElementById('pause')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const comment = document.getElementById('comment-form')
const commentButton = document.getElementById('submit')
const form = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')


let timer = setInterval(increaseCounter, 1000)
function increaseCounter() {
    counter.innerText ++
}

pause.addEventListener("click", toggleCounter)
function pauseCounter() {
    clearInterval(timer);
    plus.disabled = true
    minus.disabled = true
    heart.disabled = true
    pause.innerHTML = 'resume'
}

//pause.addEventListener("click", toggleCounter)
function resumeCounter() {
    setInterval(increaseCounter, 1000)
    plus.disabled = false
    minus.disabled = false
    heart.disabled = false
    pause.innerHTML = 'pause'
}

function toggleCounter() {
    if (pause.innerText === "pause") {
        pauseCounter()
    }
    else {
        resumeCounter()
    }
}

//document.addEventListener("DOMContentLoaded", () => {
form.addEventListener("submit", function(event){
    event.preventDefault();
    addComment(event);
});

function addComment() {
    const commentList = document.createElement('ul');
    const commentWords = document.createElement('li')
    
    document.body.appendChild(commentList)
    commentList.appendChild(commentWords);
    commentWords.innerText = commentInput.value
}


// setInterval(increaseCounter, 1000)

// document.addEventListener("domContentLoaded", "")