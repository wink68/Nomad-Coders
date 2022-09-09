// 3-8강 참고

/* toggle
   classList에 active 클래스가 있는지 확인
   있다면 active 클래스 제거
   없다면 active 클래스 추가 */

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
