const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
   // 기본 동작 실행 정지 (자동 submit되는 것)
   event.preventDefault();

   // 입력하면 입력창이 숨겨짐
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;

   // h1에 추가해주고, 숨겨지는 기능을 제거
   greeting.innerText = `Hello ${username}`;    // "Hello " + username
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
