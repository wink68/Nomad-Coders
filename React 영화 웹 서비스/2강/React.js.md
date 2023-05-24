## React JS
1. React JS는 JS로 시작해 HTML에서 끝남
2. React JS는 JS를 통해 element를 생성하고, 그걸 HTML로 옮김
   = React JS가 화면에 보여질 HTML을 컨트롤 할 수 있다

<br>

### 1) React 예시
```js
<!DOCTYPE html>
<html>
  <head>
    <title>React로 버튼 앱 만들기</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.getElementById("root");
    /* 태그 생성 */
    const h3 = React.createElement(
      "h3",                       /* (생성할 태그, 프로퍼티, 내용) */
      { onMouseEnter: () => console.log('mouse enter') },
      "Hello, I'm a title"
    );
    const btn = React.createElement(
      "button",
      { onClick: () => console.log(`I'm clicked`) },
      "Click me"
    );
    const container = React.createElement("div", null, [h3, btn]);
    
    /* 렌더링: 사용자에게 보여줌 */
    ReactDOM.render(container, root)     /* (생성할 태그, 생성 장소) */
  </script>
</html>
```

<br>

3. Babel
* 브라우저가 JSX 코드를 이해할 수 있는 형태로 변환

4. JSX
* 컴포넌트 첫 글자는 대문자