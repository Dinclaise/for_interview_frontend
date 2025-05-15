import { useEffect, useLayoutEffect, useState } from 'react';

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

    return <div ref={() => console.log('ref child')}></div>;
};

export const App = () => {
    const [num, setNum] = useState(0);

    console.log('parent: render');

    const clickHandler = () => setNum((prev) => prev + 1);

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
            <button onClick={clickHandler} ref={() => console.log('ref parent')}>
                render
            </button>
            <div style={{ fontSize: '45px', textAlign: 'center' }}>{num}</div>
        </>
    );
};
