const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
   event.preventDefault();         // 기본 동작 실행 정지 (자동 submit되는 것)

   loginForm.classList.add(HIDDEN_CLASSNAME);   // 입력하면 입력창이 숨겨짐
   const username = loginInput.value;

   localStorage.setItem("username", username);  // 입력된 username이 localStorage에 저장됨

   greeting.innerText = `Hello ${username}`;    // h1에 추가해주고, 숨겨지는 기능을 제거
                                                // "Hello " + username
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
