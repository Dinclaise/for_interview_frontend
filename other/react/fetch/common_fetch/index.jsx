import React, { useState, useEffect } from 'react';

const App = () => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [error1, setError1] = useState(null);
    const [error2, setError2] = useState(null);

    useEffect(() => {
        const fetchData1 = async () => {
            try {
                const response = await fetch('https://api.example.com/data1');
                const result = await response.json();
                setData1(result);
            } catch (err) {
                setError1(err.message);
            } finally {
                setLoading1(false);
            }
        };

        const fetchData2 = async () => {
            try {
                const response = await fetch('https://api.example.com/data2');
                const result = await response.json();
                setData2(result);
            } catch (err) {
                setError2(err.message);
            } finally {
                setLoading2(false);
            }
        };

        fetchData1();
        fetchData2();
    }, []);

    return (
        <div>
            {loading1 ? <p>Loading Data 1...</p> : error1 ? <p>Error 1: {error1}</p> : <pre>{JSON.stringify(data1, null, 2)}</pre>}
            {loading2 ? <p>Loading Data 2...</p> : error2 ? <p>Error 2: {error2}</p> : <pre>{JSON.stringify(data2, null, 2)}</pre>}
        </div>
    );
};

export default App;
