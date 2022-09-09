// 3-6강 참고.

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;  // h1 색깔에 적용하기 위해
}

h1.addEventListener("click", handleTitleClick);
