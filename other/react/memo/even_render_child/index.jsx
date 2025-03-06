import React, { useState } from 'react';

const Parent = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prevProps) => ++prevProps);

    return (
        <div>
            Parent: {count} <br />
            <SubElement clicker={increment} count={count} />
        </div>
    );
};


// Дочерний компонент SubElement с использованием React.memo
const SubElement = ({ clicker, count }) => {
    console.log('SubElement rendered');
    return (
        <div>
            Sub: {count} <br />
            <button onClick={clicker}>Increment</button>
        </div>
    );
};
