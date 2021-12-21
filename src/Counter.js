import React, { useState } from "react";

const Counter = () => {
    // const state = useState(1);
    // const count = state[0];
    // const setCount = state[1];
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };
    return <div>
        <div>{count}</div>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
}

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 1
//         };
//         this.increaseCount = this.increaseCount.bind(this);
//     }

//     increaseCount() {
//         this.setState({count: this.state.count + 1});
//     }

//     render() {
//         return <div>
//             <div>{this.state.count}</div>
//             <button onClick={this.increaseCount}>+</button>
//         </div>;
//     }
// }
export default Counter;