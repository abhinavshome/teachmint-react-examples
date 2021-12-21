import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// document.getElementById('root').innerHTML = '<h1>Hello World</h1>';

// const element = React.createElement('h1', {title: 'Hi'}, 'Hello World');

//simple JSX
// const jsxElement = <h1 title="Hi" className="bold">Hello World</h1>;

// const name = 'Abhinav';
// const greeting = <div>Good morning {name}</div>;

// const fruits = ['mango', 'guava', 'orange', 'banana'];
// const fruitsJSX = <ul>
//   {fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
// </ul>;

// //components
// const Greeting = (props) => {
//   return <h1>Good morning {props.name}</h1>;
// }

// const Fruit = (props) => {
//   return <li>{props.fruit}</li>;
// }
// const Fruits = (props) => {
//   const fruits = props.fruits;
//   return <ul>
//     {fruits.map((f,i) => <Fruit key={i} fruit={f} />)}
//   </ul>
// }



ReactDOM.render(<App />, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );


