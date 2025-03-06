import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

export const Child = ({ num }) => {
    console.log('child: render');

    useLayoutEffect(() => {
        console.log('child: layout effect');
        return () => {
            console.log('child: cleanup layout effect');
        };
    }, [num]);

    useEffect(() => {
        console.log('child: effect');
        return () => {
            console.log('child: cleanup effect');
        };
    }, [num]);

    return null;
};

export default () => {
    const [num, setNum] = useState(0);

    console.log('parent: render');

    const clickHandler = () => setNum(prev => prev + 1);

    useLayoutEffect(() => {
        console.log('parent: layout effect');
        return () => {
            console.log('parent: cleanup layout effect');
        };
    }, [num]);

    useEffect(() => {
        console.log('parent: effect');
        return () => {
            console.log('parent: cleanup effect');
        };
    }, [num]);

    return (
        <>
            <Child num={num} />
            <button onClick={clickHandler}>render</button>
            <div style={{ fontSize: '45px', textAlign: 'center' }}>{num}</div>
        </>
    );
};


//answers

// parent: render
// child: render
// child: cleanup layout effect
// parent: cleanup layout effect
// child: layout effect
// parent: layout effect
// child: cleanup effect
// parent: cleanup effect
// child: effect
// parent: effect
