## React JS
1. React JS는 JS로 시작해 HTML에서 끝남
2. React JS는 JS를 통해 element를 생성하고, 그걸 HTML로 옮김
   = React JS가 화면에 보여질 HTML을 컨트롤 할 수 있다

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
    const span = React.createElement(
      "span",                       /* (생성할 태그, 프로퍼티, 내용) */
      { id: "sexy-span", style: { color: "red" } },
      "Hello, I'm a span"
    );
    /* 렌더링: 사용자에게 보여줌 */
    ReactDOM.render(span, root)     /* (생성할 태그, 생성 장소) */
  </script>
</html>
```