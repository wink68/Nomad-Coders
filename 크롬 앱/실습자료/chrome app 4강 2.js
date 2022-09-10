/* querySelector()
 : 대상이 id인지 명확히 해줘야 함
 : className, tagname 모두 찾을 수 있기 때문

 * getElementById() : id를 찾는 것
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
/* 변수를 #으로 넣기 전
   const loginForm = document.getElementById("login-form");
   const loginInput = loginForm.querySelector("input");
   const loginButton = loginForm.querySelector("button");
*/

function onLoginSubmit(event) {
   event.preventDefault();         // 기본 동작 실행 정지 (자동 submit되는 것)
   console.log(loginInput.value);
}

// ()는 즉시실행을 의미하므로, 함수 뒤에 ()를 넣어주지 않음
loginForm.addEventListener("submit", onLoginSubmit);
