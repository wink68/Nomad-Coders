const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
   event.preventDefault();         // 기본 동작 실행 정지 (자동 submit되는 것)
   console.log(loginInput.value);
}

function handleLinkClick() {
    alert("clicked!")             // url링크를 타고 접속되는 것을 알람창이 일시적으로 정지함
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
