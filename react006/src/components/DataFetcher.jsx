import { useState, useEffect } from "react";

import useWindowSize from "./useWindowSize";

const DataFetcher = () => {
    const [data, setData] = useState([]);

    const size = useWindowSize();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);  // 비여있는 배열인 경우, 최초 1회만 랜더링함
    
    return (
        <>
            <p>윈도우 폭: {size.width}px</p>
            <p>윈도우 높이: {size.height}px</p>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    );
}

export default DataFetcher;