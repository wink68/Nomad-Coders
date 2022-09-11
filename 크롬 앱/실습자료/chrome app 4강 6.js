const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 변수명이 틀렸을 경우, 에러를 알려주기 때문
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
   event.preventDefault();         // 기본 동작 실행 정지 (자동 submit되는 것)

   loginForm.classList.add(HIDDEN_CLASSNAME);     // 입력하면 입력창이 숨겨짐
   const username = loginInput.value;

   localStorage.setItem(USERNAME_KEY, username);  // 입력된 username이 localStorage에 저장됨

   paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);


// greeting 함수
function paintGreetings(username) {
   greeting.innerText = `Hello ${username}`;      // h1에 추가해주고, 숨겨지는 기능을 제거
   greeting.classList.remove(HIDDEN_CLASSNAME);   // "Hello " + username
}

// localStorage에 username이 있는지 체크
const saveUsername = localStorage.getItem(USERNAME_KEY);
if (saveUsername === null) {      // 비어있을 때
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);

} else {
   paintGreetings(saveUsername);  // 비어있지 않을때, 저장된 유저이름 보여주기
}
