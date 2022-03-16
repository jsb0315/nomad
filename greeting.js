const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input")
const greeting = document.querySelector("#greeting");
const HIDDEN="hidden";
const USERNAME="username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME, username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

const saveusername=localStorage.getItem(USERNAME);

if (saveusername===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    loginForm.classList.add(HIDDEN);
    paintGreeting(saveusername);
    
}

console.log("hello");
