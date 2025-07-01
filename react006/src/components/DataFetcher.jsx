import { useState, useEffect } from "react";

const DataFetcher = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);  // 비여있는 배열인 경우, 최초 1회만 랜더링함
    
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default DataFetcher;