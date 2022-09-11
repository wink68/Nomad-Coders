// 3-8강 참고.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "active";     // css의 .active와 동일

    // classList
    if (h1.classList.contains(clickedClass)) {   // .contains()
        h1.classList.remove(clickedClass);       // .remove()
    } else {
        h1.classList.add(clickedClass);          // .add()
    }
}

h1.addEventListener("click", handleTitleClick);
