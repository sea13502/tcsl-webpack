const React = require('react');
const ReactDOM = require('react-dom');

//可以尝试些别的结构赋值
let { a } = { a:123 };

ReactDOM.render(
  <h1>Hello, world!{a}</h1>,
  document.querySelector('#wrapper')
);
